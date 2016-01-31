<%@page import="com.liferay.portal.UserLockoutException"%>
<%@page import="com.liferay.portal.UserEmailAddressException"%>
<%@page import="com.liferay.portal.UserPasswordException"%>
<%@page import="com.liferay.portal.UserScreenNameException"%>
<%@page import="com.liferay.portal.PasswordExpiredException"%>
<%@page import="com.liferay.portal.NoSuchUserException"%>
<%@page import="com.liferay.portal.security.auth.AuthException"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>
<%@ taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %>
<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>

<%@ page import="com.liferay.portal.CookieNotSupportedException" %>
<%-- <%@ page import="com.liferay.portal.exception.NoSuchUserException" %>
<%@ page import="com.liferay.portal.exception.PasswordExpiredException" %>
<%@ page import="com.liferay.portal.exception.UserEmailAddressException" %>
<%@ page import="com.liferay.portal.exception.UserLockoutException" %>
<%@ page import="com.liferay.portal.exception.UserPasswordException" %>
<%@ page import="com.liferay.portal.exception.UserScreenNameException" %> --%>
<%@ page import="com.liferay.portal.kernel.language.LanguageUtil" %>
<%-- <%@ page import="com.liferay.portal.kernel.security.auth.AuthException" %> --%>
<%@ page import="com.liferay.portal.kernel.util.ClassResolverUtil" %>
<%@ page import="com.liferay.portal.kernel.util.Constants" %>
<%@ page import="com.liferay.portal.kernel.util.GetterUtil" %>
<%@ page import="com.liferay.portal.kernel.util.HtmlUtil" %>
<%@ page import="com.liferay.portal.kernel.util.MethodKey" %>
<%@ page import="com.liferay.portal.kernel.util.ParamUtil" %>
<%@ page import="com.liferay.portal.kernel.util.PortalClassInvoker" %>
<%@ page import="com.liferay.portal.kernel.util.PropsUtil" %>
<%@ page import="com.liferay.portal.model.Company" %>

<%@ page import="javax.portlet.WindowState" %>

<portlet:defineObjects />

<liferay-theme:defineObjects />


<!--  <div class="sign-in-overlay form-popup">
    <div class="popupclose"></div>
    error message start
    <div class="my-account-errormsg arrow-bottom">
        <div class="container">
            <p><i class="fa fa-exclamation-triangle"></i> There are errors in your submitted form<span class="my-acoount-close"><i class="fa fa-times-circle-o"></i></span></p>
        </div>
    </div>
    error message end
    <div class="middlealign">
        <div>
            <div class="container">
                <div class="popup-wrap">
                    <div class="row-blk signin-form remove-tick">
                        <div class="form-block">
                            <div class="form-row">
                                <div class="form-inner-field">
                                    <label><span>Email Address</span></label>
                                    <input type="text" value="" class="text-box">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-inner-field">
                                    <label><span>Password</span></label>
                                    <input type="text" value="" class="text-box forget-password">
                                </div>
                                <span class="password-block">
                                    <a href="forgot-username.shtml">Forgot your username?</a>
                                </span>
                            </div>
                        </div>
                        <input type="submit" class="button button-primary" value="SIGN in">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 -->
<portlet:defineObjects />

<liferay-theme:defineObjects />

<div class="sign-in-overlay form-popup">
    <div class="popupclose"></div>
    <!-- error message start -->
    <div class="my-account-errormsg arrow-bottom">
        <div class="container">
            <p><i class="fa fa-exclamation-triangle"></i>
            
            <liferay-ui:error exception="<%= AuthException.class %>" message="authentication-failed" />
			<liferay-ui:error exception="<%= CookieNotSupportedException.class %>" message="authentication-failed-please-enable-browser-cookies" />
			<liferay-ui:error exception="<%= NoSuchUserException.class %>" message="please-enter-a-valid-login" />
			<liferay-ui:error exception="<%= PasswordExpiredException.class %>" message="your-password-has-expired" />
			<liferay-ui:error exception="<%= UserEmailAddressException.class %>" message="please-enter-a-valid-login" />
			<liferay-ui:error exception="<%= UserLockoutException.class %>" message="this-account-has-been-locked" />
			<liferay-ui:error exception="<%= UserPasswordException.class %>" message="please-enter-a-valid-password" />
			<liferay-ui:error exception="<%= UserScreenNameException.class %>" message="please-enter-a-valid-screen-name" />
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

		<%
		String signedInAs = user.getFullName();
		if (themeDisplay.isShowMyAccountIcon()) {
			signedInAs = "<a href=\"" + themeDisplay.getURLMyAccount().toString() + "\">" + signedInAs + "</a>";
		}
		%>

		
	</c:when>
	<c:otherwise>

		<%
		MethodKey methodKey = new MethodKey(ClassResolverUtil.resolveByPortalClassLoader("com.liferay.portlet.login.util.LoginUtil"), "getLogin", HttpServletRequest.class, String.class, Company.class);
		String login = GetterUtil.getString((String)PortalClassInvoker.invoke(false, methodKey, request, "login", company));
		boolean rememberMe = ParamUtil.getBoolean(request, "rememberMe");
		%>

		<portlet:actionURL var="loginURL" />


<form action="<%= loginURL %>" method="post" name="fm">
			<input name="saveLastPath" type="hidden" value="<%= false %>" />
			<input name="<%= Constants.CMD %>" type="hidden" value="<%= Constants.UPDATE %>" />
			<input name="rememberMe" type="hidden" value="<%= rememberMe %>" />
			
			
                        <div class="form-block">
                            <div class="form-row">
                                <div class="form-inner-field">
                                    <label><span>Email Address</span></label>
                                    <input type="text" value="<%= HtmlUtil.escape(login) %>" name="login" class="text-box">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-inner-field">
                                    <label><span>Password</span></label>
                                    <input type="text" value="" name="password" class="text-box forget-password">
                                </div>
                                <span class="password-block">
                                    <a href="forgot-username.shtml">Forgot your username?</a>
                                </span>
                            </div>
                        </div>
                        <input type="submit" class="button button-primary" value="SIGN in">
                        
                        </form>
                    

		

		<c:if test="<%= renderRequest.getWindowState().equals(WindowState.MAXIMIZED) %>">
			
		</c:if>

		
	</c:otherwise>
</c:choose>
						</div>
     			 </div>
            </div>
        </div>
    </div>
</div>

