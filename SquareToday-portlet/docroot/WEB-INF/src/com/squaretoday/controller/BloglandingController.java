package com.squaretoday.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.portlet.PortletException;
import javax.portlet.PortletRequest;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.servlet.http.HttpServletRequest;

import com.liferay.portal.kernel.dao.orm.QueryUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.search.BooleanClauseOccur;
import com.liferay.portal.kernel.search.BooleanQuery;
import com.liferay.portal.kernel.search.BooleanQueryFactoryUtil;
import com.liferay.portal.kernel.search.Document;
import com.liferay.portal.kernel.search.Field;
import com.liferay.portal.kernel.search.Hits;
import com.liferay.portal.kernel.search.ParseException;
import com.liferay.portal.kernel.search.SearchContext;
import com.liferay.portal.kernel.search.SearchContextFactory;
import com.liferay.portal.kernel.search.SearchEngineUtil;
import com.liferay.portal.kernel.search.SearchException;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.kernel.util.StringPool;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.kernel.util.WebKeys;
import com.liferay.portal.kernel.xml.Node;
import com.liferay.portal.kernel.xml.SAXReaderUtil;
import com.liferay.portal.model.Layout;
import com.liferay.portal.service.LayoutLocalServiceUtil;
import com.liferay.portal.theme.ThemeDisplay;
import com.liferay.portal.util.PortalUtil;
import com.liferay.portlet.asset.model.AssetEntry;
import com.liferay.portlet.asset.model.AssetRenderer;
import com.liferay.portlet.asset.service.AssetCategoryLocalServiceUtil;
import com.liferay.portlet.asset.service.AssetEntryLocalServiceUtil;
import com.liferay.portlet.asset.service.persistence.AssetEntryQuery;
import com.liferay.portlet.journal.model.JournalArticle;
import com.liferay.portlet.journal.model.JournalArticleResource;
import com.liferay.portlet.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.portlet.journal.service.JournalArticleResourceLocalServiceUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class BloglandingController
 */
public class BloglandingController extends MVCPortlet {
 
@Override
public void doView(RenderRequest renderRequest,
		RenderResponse renderResponse) throws IOException, PortletException {
	
	ThemeDisplay themeDisplay = (ThemeDisplay) renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
	String requestfor =ParamUtil.get(renderRequest, "requestfor","articles");
	
	if(requestfor.equals("articles")){
		renderRequest.setAttribute("articles", getArticleAbstract(themeDisplay,renderRequest));	;
		
	}else if(requestfor.equals("search")){
		
		
	}else if(requestfor.equals("tags")){
		
		
	}
	

	
	
		super.doView(renderRequest, renderResponse);
}



private void searchcontent(RenderRequest renderRequest,
		RenderResponse renderResponse){
	
	try {
		ThemeDisplay themeDisplay = (ThemeDisplay) renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
		         HttpServletRequest httpServletRequest = PortalUtil.getOriginalServletRequest(PortalUtil.getHttpServletRequest(renderRequest));
		         SearchContext searchContext = SearchContextFactory.getInstance(httpServletRequest);
		         BooleanQuery fullQuery = BooleanQueryFactoryUtil.create(searchContext);
		         BooleanQuery searchQuery = BooleanQueryFactoryUtil.create(searchContext);
		 
		 searchQuery.addRequiredTerm(Field.TITLE, renderRequest.getParameter("searchText"));
		             if (renderRequest.getParameter("searchType").equals("content")) {
		                 searchQuery.addRequiredTerm(Field.TYPE, "general");
		                searchQuery.addRequiredTerm("ddmStructureKey", "");
		            }
		
		
		
		
			fullQuery.add(searchQuery, BooleanClauseOccur.MUST);
		
		searchContext.setStart(QueryUtil.ALL_POS);
		searchContext.setEnd(QueryUtil.ALL_POS);
		searchContext.setAttribute("paginationType", "none");
		Hits hits = SearchEngineUtil.search(searchContext, fullQuery);
		List<Document> docs = hits.toList();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SearchException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
}
private long[] getCategoryId() {
	long catid =0;
	try {
		catid=	AssetCategoryLocalServiceUtil.getCategories().get(0).getCategoryId();
		
	} catch (SystemException e1) {
		// TODO Auto-generated catch block
		System.out.println("no cateogy exist");
	}
	return new long[]{catid};
}

private List<String> getArticleAbstract(ThemeDisplay themeDisplay,PortletRequest portletRequest ){
	
	List<String> articleabstractlist  = new ArrayList<String>();

			AssetEntryQuery assetEntryQuery = new AssetEntryQuery();
	assetEntryQuery.setClassName(JournalArticle.class.getName());
	assetEntryQuery.setGroupIds(new long[]{themeDisplay.getLayout().getGroupId()});
	
	
	assetEntryQuery.setAllCategoryIds(getCategoryId());
	
 
	try {
		List<AssetEntry> assetEntryList = AssetEntryLocalServiceUtil.getEntries(assetEntryQuery);
		System.out.println(assetEntryList.size());
		System.out.println(	assetEntryList.get(0).getClassName());
		for (AssetEntry aa :assetEntryList) {
			
	
		
			JournalArticleResource journalArticleResourceObj = JournalArticleResourceLocalServiceUtil.getJournalArticleResource(aa.getClassPK());
			JournalArticle journalArticleObj=	JournalArticleLocalServiceUtil.getLatestArticle(aa.getGroupId(), journalArticleResourceObj.getArticleId());
			AssetRenderer renderer = aa.getAssetRenderer();
			System.out.println("title"+renderer.getTitle(themeDisplay.getLocale()));
			System.out.println("summary"+renderer.getSummary(themeDisplay.getLocale()));
			System.out.println("thumbnailPath"+renderer.getThumbnailPath(portletRequest));
			System.out.println("publish date"+aa.getPublishDate());
			System.out.println("display date"+aa.getAssetRenderer().getDisplayDate());
			/*System.out.println("xml"+journalArticleObj.getContentByLocale(themeDisplay.getLocale().toString()));*/
	com.liferay.portal.kernel.xml.Document document = SAXReaderUtil.read(journalArticleObj.getContentByLocale(themeDisplay.getLocale().toString()))	;
		
Node node = document.selectSingleNode("/root/dynamic-element[@name='link_to_page']/dynamic-content");

String friendlyurl = "";

if(Validator.isNotNull(node) && !node.getText().trim().equals("")){
	System.out.println("link to page "+node.getText());
String[] layoutvalues = 	node.getText().split("@");
Layout l = LayoutLocalServiceUtil.getLayout(GetterUtil.getLong(layoutvalues[2]), false,GetterUtil.getLong(layoutvalues[0]) );
System.out.println("url "+l.getFriendlyURL());
friendlyurl = l.getFriendlyURL();
} 

articleabstractlist.add(friendlyurl+StringPool.COLON+renderer.getThumbnailPath(portletRequest)+StringPool.COLON+renderer.getTitle(themeDisplay.getLocale())+StringPool.COLON+renderer.getSummary(themeDisplay.getLocale())+StringPool.COLON+aa.getPublishDate());

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
	return articleabstractlist;
}
}
