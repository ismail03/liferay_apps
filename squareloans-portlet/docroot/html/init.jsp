<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@page import="javax.portlet.WindowState"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<portlet:defineObjects />
<portlet:renderURL var="cancelurl" windowState="<%=WindowState.NORMAL.toString()%>"  >
<portlet:param name="amount" value=""/>
	<portlet:param name="term" value=""/>
	<portlet:param name="monthlyrepay" value=""/>
	<portlet:param name="totalrepay" value=""/>
	
</portlet:renderURL>