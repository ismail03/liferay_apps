package com.liferay.ismail.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.Map;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.util.IOUtils;

import com.liferay.ismail.helper.XlSheetParser;
import com.liferay.portal.kernel.servlet.HttpHeaders;
import com.liferay.portal.kernel.upload.UploadPortletRequest;
import com.liferay.portal.kernel.util.FileUtil;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.kernel.util.StringUtil;
import com.liferay.portal.util.PortalUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class Fileoperation
 */
public class Fileoperation extends MVCPortlet {
// ismail
	private final static String fileInputName = "fileupload";

	/*public void upload(ActionRequest request, ActionResponse response)
			throws Exception {

		UploadPortletRequest uploadRequest = PortalUtil
				.getUploadPortletRequest(request);

		long sizeInBytes = uploadRequest.getSize(fileInputName);

		if (uploadRequest.getSize(fileInputName) == 0) {
			throw new Exception("Received file is 0 bytes!");
		}

		// Get the uploaded file as a file.
		File uploadedFile = uploadRequest.getFile(fileInputName);

		String sourceFileName = uploadRequest.getFileName(fileInputName);
		System.out.println("uploadedFile" + uploadedFile.length());
		Map<String,String> keypairs= 	XlSheetParser.parseXlSheet(uploadedFile);
		System.out.println("final key length"+keypairs.size());
		File temp = FileUtil.createTempFile("","txt");
		
		
		  for (String key : keypairs.keySet()) {
		        String value = keypairs.get(key);
		        System.out.println(""+key+"="+value);
		        // use key and value
		    }
		 
		    
		
	}*/

	
	@Override
	public void serveResource(ResourceRequest resourceRequest,
			ResourceResponse resourceResponse) throws IOException,
				PortletException {	
		
		UploadPortletRequest uploadRequest = PortalUtil
				.getUploadPortletRequest(resourceRequest);

		long sizeInBytes = uploadRequest.getSize(fileInputName);
		int keyindex = ParamUtil.getInteger(uploadRequest, "keycolumnindex");
		int valueindex =  ParamUtil.getInteger(uploadRequest, "valuecolumnindex");
		/*if (uploadRequest.getSize(fileInputName) == 0) {
			throw new Exception("Received file is 0 bytes!");
		}*/

		// Get the uploaded file as a file.
		File uploadedFile = uploadRequest.getFile(fileInputName);

		String sourceFileName = uploadRequest.getFileName(fileInputName);
		System.out.println("uploadedFile" + uploadedFile.length());
		Map<String,String> keypairs= 	XlSheetParser.parseXlSheet(uploadedFile,keyindex,valueindex);
		System.out.println("final key length"+keypairs.size());
		File temp = FileUtil.createTempFile();
		
		PrintWriter writer = resourceResponse.getWriter();
		resourceResponse.setContentType("text/plain");
		resourceResponse.setCharacterEncoding("UTF-8");
		resourceResponse.addProperty("Content-Disposition", "attachment; filename="+sourceFileName.substring(0,sourceFileName.indexOf("."))+".txt");
		  for (String key : keypairs.keySet()) {
		        String value = keypairs.get(key);
		        System.out.println(""+key+"="+value);
		      
				writer.write(key+"="+value);
				writer.write("\r\n");
		        // use key and value
		    }
		/*  resourceResponse.setContentType("text/html");*/
		 /* resourceResponse.addProperty(HttpHeaders.CACHE_CONTROL, "max-age=3600, must-revalidate");*/
		 
		writer.flush();
		writer.close();
		FileUtil.delete(temp);
		 }
	
}
