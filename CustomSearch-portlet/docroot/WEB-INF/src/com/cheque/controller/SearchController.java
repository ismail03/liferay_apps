package com.cheque.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.search.Document;
import com.liferay.portal.kernel.search.Field;
import com.liferay.portal.kernel.search.Hits;
import com.liferay.portal.kernel.search.Indexer;
import com.liferay.portal.kernel.search.IndexerRegistryUtil;
import com.liferay.portal.kernel.search.QueryConfig;
import com.liferay.portal.kernel.search.SearchContext;
import com.liferay.portal.kernel.search.SearchContextFactory;
import com.liferay.portal.kernel.search.SearchException;
import com.liferay.portal.kernel.util.ListUtil;
import com.liferay.portal.kernel.util.StringPool;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.kernel.util.WebKeys;
import com.liferay.portal.model.Group;
import com.liferay.portal.model.Layout;
import com.liferay.portal.model.LayoutConstants;
import com.liferay.portal.model.LayoutTypePortlet;
import com.liferay.portal.service.LayoutLocalServiceUtil;
import com.liferay.portal.theme.ThemeDisplay;
import com.liferay.portal.util.PortalUtil;
import com.liferay.portlet.asset.AssetRendererFactoryRegistryUtil;
import com.liferay.portlet.asset.model.AssetEntry;
import com.liferay.portlet.asset.model.AssetRenderer;
import com.liferay.portlet.asset.model.AssetRendererFactory;
import com.liferay.portlet.asset.service.AssetEntryLocalServiceUtil;
import com.liferay.portlet.asset.service.AssetTagLocalServiceUtil;
import com.liferay.portlet.documentlibrary.util.DLUtil;
import com.liferay.portlet.dynamicdatamapping.storage.StorageEngine;
import com.liferay.portlet.dynamicdatamapping.storage.StorageEngineUtil;
import com.liferay.portlet.journal.model.JournalArticle;
import com.liferay.portlet.journal.service.JournalArticleLocalServiceUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class SearchController
 */
public class SearchController extends MVCPortlet {
 @Override
public void doView(RenderRequest renderRequest,
		RenderResponse renderResponse) throws IOException, PortletException {
	// TODO Auto-generated method stub
	ThemeDisplay themeDisplay =  (ThemeDisplay) renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
JournalArticle j = JournalArticleLocalServiceUtil.getArticle(2313);
j.getClassPK()
j.getStructureId();
StorageEngineUtil.getStorageEngine().getFields(arg0);


		try {
			 
			
		Indexer indexer = IndexerRegistryUtil.getIndexer(JournalArticle.class);

		SearchContext searchContext = SearchContextFactory.getInstance(PortalUtil.getHttpServletRequest(renderRequest));

		/*searchContext.setAttribute("articleType", type);*/
		searchContext.setGroupIds(null);
		searchContext.setKeywords("ismail");
 
		QueryConfig queryConfig = new QueryConfig();

		queryConfig.setHighlightEnabled(true);

		searchContext.setQueryConfig(queryConfig);

		
			Hits hits = indexer.search(searchContext);
			
			
			
			System.out.println("hits"+hits.getLength());
			
			List<Document> results = ListUtil.toList(hits.getDocs());
			  String renderPath =  StringPool.BLANK;
			  String renderPortletId=  StringPool.BLANK;
			for(Document doc : results) { 
				  System.out.println(doc.toString());
			    Long classPK = Long.parseLong(doc.get(Field.ENTRY_CLASS_PK)); 
			     
			    AssetEntry assetEntry = AssetEntryLocalServiceUtil.getEntry(JournalArticle.class.getName(), classPK);
			     
			    AssetRendererFactory af = AssetRendererFactoryRegistryUtil
			        .getAssetRendererFactoryByClassName(JournalArticle.class.getName());
			  
			    AssetRenderer assetRenderer = af.getAssetRenderer(assetEntry.getClassPK());
			 renderPath = assetRenderer.render(renderRequest,
			    		renderResponse,
			                                             AssetRenderer.TEMPLATE_FULL_CONTENT);
			     renderPortletId = AssetRendererFactoryRegistryUtil
			        .getAssetRendererFactoryByClassName(JournalArticle.class.getName()).getPortletId();
			
			System.out.println("render path"+renderPath);

			
			 }
			
			String keyword ="welcome";
			
	System.out.println();
	renderRequest.setAttribute("renderPath", renderPath);
			renderRequest.setAttribute("renderPortletId", renderPortletId);
		} catch (SearchException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (PortalException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SystemException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	 
	 
	 
	 
	super.doView(renderRequest, renderResponse);
}

 
 

	public void serveResource(ResourceRequest resourceRequest,
			ResourceResponse resourceResponse) throws IOException,
			PortletException {
		// TODO Auto-generated method stub
		
		try {
			 
		
		Indexer indexer = IndexerRegistryUtil.getIndexer(JournalArticle.class);

		SearchContext searchContext = SearchContextFactory.getInstance(PortalUtil.getHttpServletRequest(resourceRequest));

		/*searchContext.setAttribute("articleType", type);*/
		searchContext.setGroupIds(null);
		searchContext.setKeywords("dfd");

		QueryConfig queryConfig = new QueryConfig();

		queryConfig.setHighlightEnabled(true);

		searchContext.setQueryConfig(queryConfig);

		
			Hits hits = indexer.search(searchContext);
			
			
			
			System.out.println("hits"+hits.getLength());
			
			List<Document> results = ListUtil.toList(hits.getDocs());
			
			for(Document doc : results) { 
				  
			    Long classPK = Long.parseLong(doc.get(Field.ENTRY_CLASS_PK)); 
			     
			    AssetEntry assetEntry = AssetEntryLocalServiceUtil.getEntry(JournalArticle.class.getName(), classPK);
			     
			    AssetRendererFactory af = AssetRendererFactoryRegistryUtil
			        .getAssetRendererFactoryByClassName(JournalArticle.class.getName());
			  
			    AssetRenderer assetRenderer = af.getAssetRenderer(assetEntry.getClassPK());
			    /*String renderPath = assetRenderer.render(PortalUtil.getHttpServletRequest(resourceRequest),
			    		PortalUtil.getHttpServletRequest(resourceRequest),
			                                             AssetRenderer.TEMPLATE_FULL_CONTENT);*/
			    String renderPortletId = AssetRendererFactoryRegistryUtil
			        .getAssetRendererFactoryByClassName(JournalArticle.class.getName()).getPortletId();
			
			
			
		
			
			 }
		} catch (SearchException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (PortalException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SystemException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		/*String[] queryTerms = hits.getQueryTerms();

		ContentHits contentHits = new ContentHits();

		contentHits.setShowListed(showListed);

		contentHits.recordHits(hits, layout.getGroupId(), layout.isPrivateLayout(), searchContainer.getStart(), searchContainer.getEnd());

		int total = hits.getLength();

		searchContainer.setTotal(total);

		List<Document> results = ListUtil.toList(hits.getDocs());

		List resultRows = searchContainer.getResultRows();*/
		System.out.println("in serve resource");
	}
	
	   public static List<Layout> doGetPortletLocation(List<Group> groupList, boolean privateLayout, String portletId)
	    {
	        List<Layout> portletDetailsList = new ArrayList<Layout>();

	        if (Validator.isNotNull(groupList) && !groupList.isEmpty())
	        {

	            for (Group group : groupList)
	            {
	                long scopeGroupId = group.getGroupId();
	                long groupId = getGroupId(group);
	                try
	                {
	                    List<Layout> layouts = LayoutLocalServiceUtil.getLayouts(groupId, privateLayout,
	                            LayoutConstants.TYPE_PORTLET);

	                    for (Layout layout : layouts)
	                    {
	                        LayoutTypePortlet layoutTypePortlet = (LayoutTypePortlet) layout.getLayoutType();

	                        if (layoutTypePortlet.hasPortletId(portletId, true))
	                        {
	                            if (PortalUtil.getScopeGroupId(layout, portletId) == scopeGroupId)
	                            {

	                                portletDetailsList.add(layout);
	                            }
	                        }
	                    }
	                } catch (Exception e)
	                {
	                   System.out.println("error at line number 242");
	                }
	            }
	        }

	        return portletDetailsList;
	    }
	   public static long getGroupId(Group group)
	    {

	        long groupId = group.getGroupId();
	        try
	        {

	            if (group.isLayout())
	            {
	                Layout scopeLayout = LayoutLocalServiceUtil.getLayout(group.getClassPK());

	                groupId = scopeLayout.getGroupId();
	            }
	        } catch (Exception e)
	        {
	        	  System.out.println("error at line number 264");
	        }
	        return groupId;

	    }

}
