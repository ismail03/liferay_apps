package com.liferay.ismail.controller;

import java.io.File;
import java.util.Map;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;

import com.liferay.ismail.helper.XlSheetParser;
import com.liferay.portal.kernel.upload.UploadPortletRequest;
import com.liferay.portal.util.PortalUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class Fileoperation
 */
public class Fileoperation extends MVCPortlet {

	private final static String fileInputName = "fileupload";

	public void upload(ActionRequest request, ActionResponse response)
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
		
	}

	
}
