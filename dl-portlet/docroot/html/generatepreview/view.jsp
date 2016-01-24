<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

This is the <b>Generate Preview</b> portlet in View mode.
<% 

String id= (String) session.getAttribute("appid");
System.out.println("Value from http session : "+ id);
String jid= (String)portletSession.getAttribute("appid");
System.out.println("Value from portletsession"+ jid);
%>
<%= jid%>

<portlet:renderURL var="createsessionurl">
<portlet:param name="id" value="create"/>
</portlet:renderURL>

<a href="<%=createsessionurl %>"> create session</a>
<portlet:renderURL var="createsessionurl1">
<portlet:param name="id" value="delete"/>
</portlet:renderURL>
<a href="<%=createsessionurl1 %>"> delete session</a>