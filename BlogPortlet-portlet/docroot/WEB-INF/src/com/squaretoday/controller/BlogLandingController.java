package com.squaretoday.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

import javax.portlet.PortletException;
import javax.portlet.PortletRequest;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import com.liferay.portal.kernel.dao.orm.Criterion;
import com.liferay.portal.kernel.dao.orm.DynamicQuery;
import com.liferay.portal.kernel.dao.orm.DynamicQueryFactoryUtil;
import com.liferay.portal.kernel.dao.orm.RestrictionsFactoryUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.search.facet.AssetEntriesFacet;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.ListUtil;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.kernel.util.StringPool;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.kernel.util.WebKeys;
import com.liferay.portal.kernel.xml.DocumentException;
import com.liferay.portal.kernel.xml.Node;
import com.liferay.portal.kernel.xml.SAXReaderUtil;
import com.liferay.portal.model.Layout;
import com.liferay.portal.service.ClassNameLocalServiceUtil;
import com.liferay.portal.service.LayoutLocalServiceUtil;
import com.liferay.portal.theme.ThemeDisplay;
import com.liferay.portlet.asset.model.AssetEntry;
import com.liferay.portlet.asset.model.AssetRenderer;
import com.liferay.portlet.asset.model.AssetTag;
import com.liferay.portlet.asset.service.AssetCategoryLocalServiceUtil;
import com.liferay.portlet.asset.service.AssetEntryLocalServiceUtil;
import com.liferay.portlet.asset.service.AssetTagLocalServiceUtil;
import com.liferay.portlet.asset.service.AssetTagServiceUtil;
import com.liferay.portlet.asset.service.persistence.AssetEntryQuery;
import com.liferay.portlet.asset.util.comparator.AssetTagCountComparator;
import com.liferay.portlet.journal.model.JournalArticle;
import com.liferay.portlet.journal.model.JournalArticleResource;
import com.liferay.portlet.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.portlet.journal.service.JournalArticleResourceLocalServiceUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class BlogLandingController
 */
public class BlogLandingController extends MVCPortlet {
 
	private int noOfRecords;
	private int pageno;
	private static int recPerPage=6;
	
	public int getPageno() {
		return pageno;
	}


	public void setPageno(int pageno) {
		this.pageno = pageno;
	}


	public int getNoOfRecords() {
		return noOfRecords;
	}


	public void setNoOfRecords(int noOfRecords) {
		this.noOfRecords = noOfRecords;
	}


	@Override
	public void doView(RenderRequest renderRequest,
			RenderResponse renderResponse) throws IOException, PortletException {
		// TODO Auto-generated method stub
		ThemeDisplay themeDisplay=(ThemeDisplay) renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
		String requestfor = ParamUtil.getString(renderRequest, "requestfor","articles");
		int curPageno=ParamUtil.getInteger(renderRequest, "pageno",1);
		this.setPageno(curPageno);
	
		System.out.println("req::::::::::::::::"+requestfor);
		if(requestfor.equals("articles")){
			renderRequest.setAttribute("articles", getArticleAbstract(themeDisplay,renderRequest));	;
			renderRequest.setAttribute("tag", getTagsbyCategory(themeDisplay));	
			renderRequest.setAttribute("yrset", getArticleYears(themeDisplay));	
			int noOfPages = (int) Math.ceil(this.noOfRecords * 1.0 / recPerPage);
			renderRequest.setAttribute("noOfPages", noOfPages);
			renderRequest.setAttribute("curPages", curPageno);
			
		}else if(requestfor.equals("search")){
			
			
		}else if(requestfor.equals("tags")){
			
			
		}
		
		super.doView(renderRequest, renderResponse);
	}
	
	
	private Set<Integer> getArticleYears(ThemeDisplay themeDisplay)
	{
		
		SortedSet<Integer> yrSet=new TreeSet<Integer>();
		
		try {
		AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
		
		assetEntryQuery.setClassName(JournalArticle.class.getName());
		assetEntryQuery.setGroupIds(new long[]{themeDisplay.getLayout().getGroupId()});				
		assetEntryQuery.setAllCategoryIds(getCategoryId());			
		List<AssetEntry> assetEntryList = AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
		
		for (AssetEntry aa :assetEntryList) {	
			
			Calendar cal = Calendar.getInstance();
			cal.setTime(aa.getPublishDate());
			 yrSet.add(cal.get(Calendar.YEAR));
			
		}
		
			
		} catch (SystemException e) {
			// TODO Auto-generated catch block
			System.out.println("expection while getting by years");
			e.printStackTrace();
		}
		return yrSet;
		
	}
	
	
	private List<String> getTagsbyCategory(ThemeDisplay themeDisplay)
	{
		
		List<AssetTag> assetTags = null;
		List<String> assetTagList = new ArrayList<String>();
		
		try {
			assetTags = AssetTagServiceUtil.getTags(themeDisplay.getLayout().getGroupId(),ClassNameLocalServiceUtil.getClassNameId(JournalArticle.class.getName()) , null, 0, 20, new AssetTagCountComparator());
					if(Validator.isNotNull(assetTags) && assetTags.size()>0){
						assetTags = ListUtil.sort(assetTags);
					
						
						for(AssetTag at:assetTags)
						{
							assetTagList.add(at.getName());
							
						}
						
					}
			} catch (SystemException e) {
			// TODO Auto-generated catch block
				e.printStackTrace();
				System.out.println("expection while getting category");
			}
		

		return assetTagList;
	}
	
	private List<String> getArticleAbstractYrWise(ThemeDisplay themeDisplay,PortletRequest portletRequest,Integer year ){
		
		int start,end;
		
		List<String> articleabstractlist  = new ArrayList<String>();
		System.out.println("Enters getArticleAbstractYrWise");
		
		try {
		
			List<AssetEntry> assetEntryList;
			AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
			
			assetEntryQuery.setClassName(JournalArticle.class.getName());
			assetEntryQuery.setGroupIds(new long[]{themeDisplay.getLayout().getGroupId()});				
			assetEntryQuery.setAllCategoryIds(getCategoryId());				
		
			
		    assetEntryList= AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
		    System.out.println(assetEntryList.size());
			System.out.println(	assetEntryList.get(0).getClassName());
			
			
			int totcount=assetEntryList.size();			
			start=(this.getPageno()-1)*recPerPage;	
			end = ((start+recPerPage)<totcount)?(start+recPerPage):totcount;
			
            int j=0;
		for (AssetEntry aa :assetEntryList) {
			
			JournalArticleResource journalArticleResourceObj;			
			journalArticleResourceObj = JournalArticleResourceLocalServiceUtil.getJournalArticleResource(aa.getClassPK());
			
			JournalArticle journalArticleObj=	JournalArticleLocalServiceUtil.getLatestArticle(aa.getGroupId(), journalArticleResourceObj.getArticleId());
			AssetRenderer renderer = aa.getAssetRenderer();				

			Calendar cal = Calendar.getInstance();
			cal.setTime(aa.getPublishDate());
			int yr= cal.get(Calendar.YEAR);
			
			if(year==yr)
			{
				 j++;
				System.out.println("YYYYYYYYEEEEAAAAAAAAAARRRRR------------------::::::::"+yr);
				com.liferay.portal.kernel.xml.Document document;		
				document = SAXReaderUtil.read(journalArticleObj.getContentByLocale(themeDisplay.getLocale().toString()));
						
				Node node = document.selectSingleNode("/root/dynamic-element[@name='link_to_page']/dynamic-content");				
	
				String friendlyurl = "";
				if(Validator.isNotNull(node) && !node.getText().trim().equals("")){
					String[] layoutvalues = 	node.getText().split("@");
					Layout l = LayoutLocalServiceUtil.getLayout(GetterUtil.getLong(layoutvalues[2]), false,GetterUtil.getLong(layoutvalues[0]) );
					friendlyurl = themeDisplay.getPortalURL()+themeDisplay.getPathFriendlyURLPublic()+"/"+themeDisplay.getSiteGroupName()+l.getFriendlyURL();
				}
				articleabstractlist.add(renderer.getThumbnailPath(portletRequest)+StringPool.SEMICOLON+renderer.getTitle(themeDisplay.getLocale())+StringPool.SEMICOLON+renderer.getSummary(themeDisplay.getLocale())+StringPool.SEMICOLON+aa.getPublishDate()+StringPool.SEMICOLON+yr+StringPool.SEMICOLON+friendlyurl);
			
			} 				
		}
		totcount=j;
		this.setNoOfRecords(totcount);
	
		} catch (PortalException e) {
			// TODO Auto-generated catch block
			System.out.println("expection while getting category abstract");
			e.printStackTrace();
		} catch (SystemException e) {
			// TODO Auto-generated catch block
			System.out.println("expection while getting category abstract");
			e.printStackTrace();
		} catch (DocumentException e) {
			// TODO Auto-generated catch block
			System.out.println("expection while getting category abstract");
			e.printStackTrace();
		}catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("expection while getting category abstract");
			e.printStackTrace();
		}
		
		
		
		
		
		return articleabstractlist;
	
	}
	
	
	
	
	
	private List<String> getArticleAbstract(ThemeDisplay themeDisplay,PortletRequest portletRequest ){
		
		int start,end;
		List<String> articleabstractlist  = new ArrayList<String>();	
				
		
		try {
						
           String tags = ParamUtil.getString(portletRequest, "tags","notag");	
           Integer year = ParamUtil.getInteger(portletRequest, "year",0);
           if(!tags.equalsIgnoreCase("notag"))
           {
        	   articleabstractlist=getArticleAbstracttagwise(themeDisplay,portletRequest,tags);
           }
           else if(year!=0)
           {
        	   articleabstractlist=getArticleAbstractYrWise(themeDisplay,portletRequest,year);
           }
           else
           {
		   
		    List<AssetEntry> assetEntryList;
			AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
			
			assetEntryQuery.setClassName(JournalArticle.class.getName());
			assetEntryQuery.setGroupIds(new long[]{themeDisplay.getLayout().getGroupId()});				
			assetEntryQuery.setAllCategoryIds(getCategoryId());				
			
		    assetEntryList= AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
		    System.out.println(assetEntryList.size());
			
			
			int totcount=assetEntryList.size();
			this.setNoOfRecords(totcount);
			
			
			start=(this.getPageno()-1)*recPerPage;
			end = ((start+recPerPage)<totcount)?(start+recPerPage):totcount;
			
			assetEntryList=assetEntryList.subList(start,end );
				for (AssetEntry aa :assetEntryList) {	
				
					JournalArticleResource journalArticleResourceObj = JournalArticleResourceLocalServiceUtil.getJournalArticleResource(aa.getClassPK());
					JournalArticle journalArticleObj=	JournalArticleLocalServiceUtil.getLatestArticle(aa.getGroupId(), journalArticleResourceObj.getArticleId());
					AssetRenderer renderer = aa.getAssetRenderer();				
	/*System.out.println("title"+renderer.getTitle(themeDisplay.getLocale()));
	System.out.println("summary"+renderer.getSummary(themeDisplay.getLocale()));
	System.out.println("thumbnailPath"+renderer.getThumbnailPath(portletRequest));
	System.out.println("publish date"+ aa.getPublishDate());*/
					Calendar cal = Calendar.getInstance();
					cal.setTime(aa.getPublishDate());
					int yr= cal.get(Calendar.YEAR);
	//System.out.println("display date"+aa.getAssetRenderer().getDisplayDate());			
	/*System.out.println("xml"+journalArticleObj.getContentByLocale(themeDisplay.getLocale().toString()));*/
					com.liferay.portal.kernel.xml.Document document = SAXReaderUtil.read(journalArticleObj.getContentByLocale(themeDisplay.getLocale().toString()))	;			
					Node node = document.selectSingleNode("/root/dynamic-element[@name='link_to_page']/dynamic-content");				
	
					String friendlyurl = "";
					if(Validator.isNotNull(node) && !node.getText().trim().equals("")){
	/*System.out.println("link to page "+node.getText());*/
					String[] layoutvalues = 	node.getText().split("@");
					Layout l = LayoutLocalServiceUtil.getLayout(GetterUtil.getLong(layoutvalues[2]), false,GetterUtil.getLong(layoutvalues[0]) );
	/*System.out.println("url "+l.getFriendlyURL());*/
					friendlyurl = themeDisplay.getPortalURL()+themeDisplay.getPathFriendlyURLPublic()+"/"+themeDisplay.getSiteGroupName()+l.getFriendlyURL();
					} 
				
					articleabstractlist.add(renderer.getThumbnailPath(portletRequest)+StringPool.SEMICOLON+renderer.getTitle(themeDisplay.getLocale())+StringPool.SEMICOLON+renderer.getSummary(themeDisplay.getLocale())+StringPool.SEMICOLON+aa.getPublishDate()+StringPool.SEMICOLON+yr+StringPool.SEMICOLON+friendlyurl);
						
				}
			
           }
		} catch (SystemException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (PortalException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return  articleabstractlist;
		
	}
	
	private List<String> getArticleAbstracttagwise(ThemeDisplay themeDisplay,PortletRequest portletRequest,String tags ){
		
		int start,end;
		List<String> articleabstractlist  = new ArrayList<String>();	
				
		
		try {
					
            List<AssetEntry> assetEntryList;	
			AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
			
			assetEntryQuery.setClassName(JournalArticle.class.getName());
			assetEntryQuery.setGroupIds(new long[]{themeDisplay.getLayout().getGroupId()});				
			assetEntryQuery.setAllCategoryIds(getCategoryId());	
						
			long[] anyTagIds;		
			anyTagIds = AssetTagLocalServiceUtil.getTagIds(themeDisplay.getLayout().getGroupId(), new String[]{tags} );
			assetEntryQuery.setAnyTagIds(anyTagIds);	
			
		    assetEntryList= AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
		    System.out.println(assetEntryList.size());
			
			
			int totcount=assetEntryList.size();
			this.setNoOfRecords(totcount);
			
			start=(this.getPageno()-1)*recPerPage;
			end = ((start+recPerPage)<totcount)?(start+recPerPage):totcount;
			
			assetEntryList=assetEntryList.subList(start,end );
			
				for (AssetEntry aa :assetEntryList) {	
				
					JournalArticleResource journalArticleResourceObj = JournalArticleResourceLocalServiceUtil.getJournalArticleResource(aa.getClassPK());
					JournalArticle journalArticleObj=	JournalArticleLocalServiceUtil.getLatestArticle(aa.getGroupId(), journalArticleResourceObj.getArticleId());
					AssetRenderer renderer = aa.getAssetRenderer();				
	/*System.out.println("title"+renderer.getTitle(themeDisplay.getLocale()));
	System.out.println("summary"+renderer.getSummary(themeDisplay.getLocale()));
	System.out.println("thumbnailPath"+renderer.getThumbnailPath(portletRequest));
	System.out.println("publish date"+ aa.getPublishDate());*/
					Calendar cal = Calendar.getInstance();
					cal.setTime(aa.getPublishDate());
					int yr= cal.get(Calendar.YEAR);
	//System.out.println("display date"+aa.getAssetRenderer().getDisplayDate());			
	/*System.out.println("xml"+journalArticleObj.getContentByLocale(themeDisplay.getLocale().toString()));*/
					com.liferay.portal.kernel.xml.Document document = SAXReaderUtil.read(journalArticleObj.getContentByLocale(themeDisplay.getLocale().toString()))	;			
					Node node = document.selectSingleNode("/root/dynamic-element[@name='link_to_page']/dynamic-content");				
	
					String friendlyurl = "";
					if(Validator.isNotNull(node) && !node.getText().trim().equals("")){
	/*System.out.println("link to page "+node.getText());*/
					String[] layoutvalues = 	node.getText().split("@");
					Layout l = LayoutLocalServiceUtil.getLayout(GetterUtil.getLong(layoutvalues[2]), false,GetterUtil.getLong(layoutvalues[0]) );
	/*System.out.println("url "+l.getFriendlyURL());*/
					friendlyurl = themeDisplay.getPortalURL()+themeDisplay.getPathFriendlyURLPublic()+"/"+themeDisplay.getSiteGroupName()+l.getFriendlyURL();
					} 
				
					articleabstractlist.add(renderer.getThumbnailPath(portletRequest)+StringPool.SEMICOLON+renderer.getTitle(themeDisplay.getLocale())+StringPool.SEMICOLON+renderer.getSummary(themeDisplay.getLocale())+StringPool.SEMICOLON+aa.getPublishDate()+StringPool.SEMICOLON+yr+StringPool.SEMICOLON+friendlyurl);
						
				}
			
			
		} catch (SystemException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (PortalException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return  articleabstractlist;
		
	}
	
	
	
	
	
	private long[] getCategoryId() {
		long catid =0;
		try {
			catid=	AssetCategoryLocalServiceUtil.getCategories().get(2).getCategoryId();
			
		} catch (SystemException e1) {
			// TODO Auto-generated catch block
			System.out.println("no cateogy exist");
		}
		return new long[]{catid};
	}

}
