<%--
/**
 * Copyright (c) 2000-2013 Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */
--%>

<%@ include file="/html/portlet/login/init.jsp" %>
<div class="sign-in-overlay form-popup">
    <div class="popupclose"></div>
    <!-- error message start -->
    <div class="my-account-errormsg arrow-bottom">
        <div class="container">
            <p><i class="fa fa-exclamation-triangle"></i>
            
         
            <span class="my-acoount-close"><i class="fa fa-times-circle-o"></i></span></p>
        </div>
    </div>
    <!-- error message end -->
    <div class="middlealign">
        <div>
            <div class="container">
                <div class="popup-wrap">
                  <div class="row-blk signin-form remove-tick">
<c:choose>
	<c:when test="<%= themeDisplay.isSignedIn() %>">

	
	</c:when>
	<c:otherwise>

		<%
		String redirect = ParamUtil.getString(request, "redirect");

		String login = LoginUtil.getLogin(request, "login", company);
		String password = StringPool.BLANK;
		boolean rememberMe = ParamUtil.getBoolean(request, "rememberMe");

		if (Validator.isNull(authType)) {
			authType = company.getAuthType();
		}
		%>

		<portlet:actionURL secure="<%= PropsValues.COMPANY_SECURITY_AUTH_REQUIRES_HTTPS || request.isSecure() %>" var="loginURL">
			<portlet:param name="struts_action" value="/login/login" />
		</portlet:actionURL>
<form action="<%= loginURL %>" method="post" name="fm">
			<input name="<portlet:namespace/>saveLastPath" type="hidden" value="<%= false %>" />
			<input name="<portlet:namespace/>redirect" type="hidden" value="<%= redirect %>" />
			<input name="<portlet:namespace/>doActionAfterLogin" type="hidden" value="<%= portletName.equals(PortletKeys.FAST_LOGIN) ? true : false %>" />
  <liferay-ui:error exception="<%= AuthException.class %>" message="authentication-failed" />
			<liferay-ui:error exception="<%= CompanyMaxUsersException.class %>" message="unable-to-login-because-the-maximum-number-of-users-has-been-reached" />
			<liferay-ui:error exception="<%= CookieNotSupportedException.class %>" message="authentication-failed-please-enable-browser-cookies" />
			<liferay-ui:error exception="<%= NoSuchUserException.class %>" message="authentication-failed" />
			<liferay-ui:error exception="<%= PasswordExpiredException.class %>" message="your-password-has-expired" />
			<liferay-ui:error exception="<%= UserEmailAddressException.class %>" message="authentication-failed" />
			<liferay-ui:error exception="<%= UserLockoutException.class %>" message="this-account-has-been-locked" />
			<liferay-ui:error exception="<%= UserPasswordException.class %>" message="authentication-failed" />
			<liferay-ui:error exception="<%= UserScreenNameException.class %>" message="authentication-failed" />
			
				<%
				String loginLabel = null;

				if (authType.equals(CompanyConstants.AUTH_TYPE_EA)) {
					loginLabel = "Email Address";
				}
				else if (authType.equals(CompanyConstants.AUTH_TYPE_SN)) {
					loginLabel = "Screen Name";
				}
				else if (authType.equals(CompanyConstants.AUTH_TYPE_ID)) {
					loginLabel = "Id";
				}
				%>
			
                        <div class="form-block">
                            <div class="form-row">
                                <div class="form-inner-field">
                                    <label><span><%=loginLabel%></span></label>
                                    <input type="text" value="<%= HtmlUtil.escape(login) %>" name="<portlet:namespace/>login" class="text-box">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-inner-field">
                                    <label><span>Password</span></label>
                                    <input type="password" value="" name="<portlet:namespace/>password" class="text-box forget-password">
                                </div>
                                <span class="password-block">
                                    <a href="forgot-username.shtml">Forgot your username?</a>
                                </span>
                            </div>
                        </div>
                        <input type="submit" class="button button-primary" value="SIGN in">
                        
                        </form>

		

				<c:if test="<%= renderRequest.getWindowState().equals(WindowState.MAXIMIZED) %>">
			
			<script type="text/javascript">
			
			$(document).ready(function() {
				
				 $(".sign-in-link a").trigger('click');
			});
			
			</script>
		</c:if>

				
		

		

		
	</c:otherwise>
</c:choose>

</div>
     			 </div>
            </div>
        </div>
    </div>
</div>