package com.squaretoday.loans.controller;

import java.io.IOException;
import java.util.logging.Logger;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletException;
import javax.portlet.PortletRequestDispatcher;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.servlet.http.HttpServletRequest;

import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.kernel.util.StringPool;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.util.PortalUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;

/**
 * Portlet implementation class LoanjourneyController
 */
public class LoanjourneyController extends MVCPortlet {
 private static String GETSTARTED = "/html/loanjourneycontroller/getstarted.jsp";
 private static String PERSONALDETAILS = "/html/loanjourneycontroller/personaldetails.jsp";
@Override
public void doView(RenderRequest renderRequest,
		RenderResponse renderResponse) throws IOException, PortletException {
	
	
	// TODO Auto-generated method stub
	
	HttpServletRequest httpReq = PortalUtil.getOriginalServletRequest(PortalUtil.getHttpServletRequest(renderRequest)); 
	String borrow= httpReq.getParameter("borrow");
	
	if(Validator.isNotNull(borrow) ){
		String amount = StringPool.BLANK;
		String period = StringPool.BLANK;
	 amount = borrow.split(",")[0];
	 period = borrow.split(",")[1];
	 System.out.println("borrow amount"+amount);
		System.out.println("borrow month"+period);
		renderRequest.setAttribute("amount", amount);
		renderRequest.setAttribute("period", period);
		super.doView(renderRequest, renderResponse);
	}
	
	
	String pagename = ParamUtil.getString(renderRequest, "pagename","");
	if(pagename.equals("getstarted")){
		
		String term = ParamUtil.getString(renderRequest, "term" );
		String monthlyrepay =ParamUtil.getString(renderRequest, "monthlyrepay");
		String totalrepay = ParamUtil.getString(renderRequest, "totalrepay");
		String borrowamount =  ParamUtil.getString(renderRequest, "borrowamount");
		renderRequest.setAttribute("term", term);
		renderRequest.setAttribute("monthlyrepay", monthlyrepay);
		renderRequest.setAttribute("totalrepay", totalrepay);
		renderRequest.setAttribute("borrowamount", borrowamount);
		include(GETSTARTED, renderRequest, renderResponse);
	}else if(pagename.equals("aboutyou")){
		String term = ParamUtil.getString(renderRequest, "term" );
		String monthlyrepay =ParamUtil.getString(renderRequest, "monthlyrepay");
		String totalrepay = ParamUtil.getString(renderRequest, "totalrepay");
		String borrowamount =  ParamUtil.getString(renderRequest, "borrowamount");
		renderRequest.setAttribute("term", term);
		renderRequest.setAttribute("monthlyrepay", monthlyrepay);
		renderRequest.setAttribute("totalrepay", totalrepay);
		renderRequest.setAttribute("borrowamount", borrowamount);
		include(PERSONALDETAILS, renderRequest, renderResponse);
		
	}else{
		super.doView(renderRequest, renderResponse);
		
	}
	System.out.println("in do view");
	
}

@Override
	public void processAction(ActionRequest actionRequest,
			ActionResponse actionResponse) throws IOException, PortletException {
		// TODO Auto-generated method stub
		System.out.println("process action");
	}

@Override
	public void serveResource(ResourceRequest resourceRequest,
			ResourceResponse resourceResponse) throws IOException,
			PortletException {
		
		System.out.println("in serve resoucre");
		PortletRequestDispatcher dispatcher = getPortletContext().getRequestDispatcher(PERSONALDETAILS);


		

		dispatcher.include(resourceRequest, resourceResponse);
	}
}
