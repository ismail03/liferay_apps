package com.sample.portlet;

import java.awt.Image;
import java.awt.image.RenderedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.imageio.ImageIO;
import javax.portlet.PortletException;
import javax.portlet.PortletSession;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.apache.tools.ant.util.FileUtils;
import org.ghost4j.document.DocumentException;
import org.ghost4j.document.PDFDocument;
import org.ghost4j.renderer.RendererException;
import org.ghost4j.renderer.SimpleRenderer;

import com.liferay.counter.service.CounterLocalServiceUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.repository.model.FileEntry;
import com.liferay.portal.kernel.repository.model.Folder;
import com.liferay.portal.kernel.upload.UploadPortletRequest;
import com.liferay.portal.kernel.util.FileUtil;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.MimeTypesUtil;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.kernel.util.PropsUtil;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.kernel.util.WebKeys;
import com.liferay.portal.service.ServiceContext;
import com.liferay.portal.theme.ThemeDisplay;
import com.liferay.portlet.documentlibrary.service.DLAppLocalServiceUtil;
import com.liferay.portlet.documentlibrary.service.DLFileEntryLocalServiceUtil;
import com.liferay.portlet.documentlibrary.util.DLUtil;
import com.liferay.portlet.documentlibrary.util.PDFProcessorUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class GeneratePreview
 */
public class GeneratePreview extends MVCPortlet {
 @Override
public void doView(RenderRequest renderRequest,
		RenderResponse renderResponse) throws IOException, PortletException {
	// TODO Auto-generated method stub
	String idd = ParamUtil.getString(renderRequest, "id");
	PortletSession session = renderRequest.getPortletSession();
	if(idd.equals("create")){
		
		if(session!=null){
			
			System.out.println("session"+session.getCreationTime());
			System.out.println(session.getAttributeNames().toString());
			Enumeration<String> enumsd = session.getAttributeNames();
			
			while(enumsd.hasMoreElements()){
		
				String param = (String)enumsd.nextElement();
				System.out.println(param);
				}
			
		}
		Long appid=0l;
		try {
			appid = CounterLocalServiceUtil.increment();
		} catch (SystemException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		session.setAttribute("appid", appid+"", PortletSession.PORTLET_SCOPE);
		session.setMaxInactiveInterval(5);
		
	}else if(idd.equals("delete")){
if(session!=null){
	session.removeAttribute("appid");
	/*session.invalidate();*/
			
		}
		
	}
	/* try {
		
		long appid =CounterLocalServiceUtil.increment();
		session.setAttribute("appid",  GetterUtil.getString(appid), PortletSession.PORTLET_SCOPE);
	 String tempstoragelocationfordisplay = System.getProperty("catalina.base")+"/webapps"+renderRequest.getContextPath()+"/";
	 
	
	 
	 ThemeDisplay themeDisplay = (ThemeDisplay)renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
	 URL url = new URL("http://www.polyu.edu.hk/iaee/files/pdf-sample.pdf");
	 URLConnection connection = url.openConnection();
	 InputStream is = connection.getInputStream();
	
	 
	 File tempfile = FileUtil.createTempFile(is);
	
	System.out.println(tempfile.getName());
	
	PDFDocument document  = new PDFDocument();
	
	document.load(tempfile);
	SimpleRenderer renderer = new SimpleRenderer();
	renderer.setResolution(400);
	
		List<Image> images = renderer.render(document);
		List<String> imagespath = new ArrayList<String>(); 
		System.out.println(images.size());
		File folder=	new File(tempstoragelocationfordisplay+appid);
		if(!folder.exists()){
			folder.mkdir();
			
		}
		for (int i = 0; i < images.size(); i++) {
			
		File f=	new File(tempstoragelocationfordisplay+appid+"/"+(i) + ".png");
		
			ImageIO.write((RenderedImage) images.get(i), "png",f );
            imagespath.add(themeDisplay.getPortalURL()+renderRequest.getContextPath()+"/"+f.getName());
          
        }
		System.out.println(imagespath.toString());
		
		System.out.println("context path"+renderRequest.getContextPath());
		 tempfile.delete();
		 deleteImages(tempstoragelocationfordisplay,appid,images.size());
	} catch (RendererException | DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}catch (SystemException e1) {
		// TODO Auto-generated catch block
		e1.printStackTrace();
	}
*/	super.doView(renderRequest, renderResponse);
}
 private boolean deleteImages(String temppath, long applcationid, int numberofpages ) {
	 File  f = new File(temppath+applcationid);
	
	 if(f.isDirectory()){
	/* for(int i =0;i<numberofpages;i++){
		
		 f = new File(temppath+applcationid+"/"+i+".png");
		 f.delete();
	 }*/
		 System.out.println("deleting directiory"+applcationid);
	 FileUtil.deltree(f);
	 }
	return true; 
 }
 
 private long uploadFileEntity(ServiceContext serviceContext, 
	        UploadPortletRequest request,ThemeDisplay themeDisplay) 
	                throws PortalException, SystemException {

	    String filename = "";
	    String description = "File description";
Long fileid = 0L;
	    try{

	        // serviceContext.scopeGroupId is the groupId of a site
	        long repositoryId = themeDisplay.getCompanyGroupId();
	        
	        
	        Folder f =  getFolder(repositoryId, 0L, themeDisplay.getUser().getScreenName());
	       
		if(Validator.isNull(f)){
		f =	DLAppLocalServiceUtil.addFolder(themeDisplay.getUserId(), repositoryId,
					0L, themeDisplay.getUser().getScreenName(),
					"contains orders placed by this user", serviceContext);
			
		}

	        File file = request.getFile("file-to-upload");
	        filename = request.getFileName("file-to-upload");
	        String mimeType =  MimeTypesUtil.getContentType(file);

	        FileEntry entry = DLAppLocalServiceUtil.addFileEntry(serviceContext.getUserId(), 
	                repositoryId,  f.getFolderId(), filename, 
	                mimeType, filename, description, "", 
	                file, serviceContext
	        );  
	     fileid =   entry.getFileEntryId();
	    }catch(PortalException e){
	       
	        throw e;
	    }catch(SystemException e ){
	      
	        throw e;
	    }
	    
	 return fileid;
	}
 private Folder getFolder(long repositoryid, long parentfolderid, String foldername) {
		Folder f = null;
		  try {
			 f = DLAppLocalServiceUtil.getFolder(repositoryid, parentfolderid,foldername);
		} catch (PortalException | SystemException e) {
			// TODO Auto-generated catch block
			System.out.println("there is no folder exist with given user id  therefore creating new folder");
		}
		  
		return f;
		} 
}
