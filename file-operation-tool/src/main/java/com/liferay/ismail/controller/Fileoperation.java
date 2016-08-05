package com.liferay.ismail.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Iterator;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.liferay.ismail.helper.XlSheetParser;
import com.liferay.portal.kernel.upload.UploadPortletRequest;
import com.liferay.portal.kernel.util.StringPool;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.util.PortalUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class Fileoperation
 */
public class Fileoperation extends MVCPortlet {

	@Override
	public void doView(RenderRequest renderRequest,
			RenderResponse renderResponse) throws IOException, PortletException {
		// TODO Auto-generated method stub

		super.doView(renderRequest, renderResponse);
	}

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
		XlSheetParser.parseXlSheet(uploadedFile);
		
	}

	
}
