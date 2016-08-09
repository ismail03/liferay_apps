<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui"%>
<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui"%>
<portlet:defineObjects />


<portlet:defineObjects />
 <portlet:resourceURL var="uploadFileURL" ></portlet:resourceURL>
<%-- <portlet:actionURL name="upload" var="uploadFileURL"></portlet:actionURL>
  --%>
<aui:form action="<%= uploadFileURL %>" enctype="multipart/form-data" method="post" name="xls">
 
	<aui:input type="file" name="fileupload" label="Upload XLsheet" >
	<aui:validator  name="required "  errorMessage="Field is required" />
		<aui:validator name="acceptFiles">'xlsx'</aui:validator>
	</aui:input>
	<aui:input name="keycolumnindex" type="text" label="Enter key column index" helpMessage='This is column index in your xl sheet. If key contains "=" sign,then left hand side will be taken as key'>
	<aui:validator name="digits"></aui:validator>
	
		<aui:validator  name="required "  errorMessage="Field is required" />
               <aui:validator name="min">0</aui:validator>
              <aui:validator name="max">10</aui:validator>
	</aui:input>
	<aui:input name="valuecolumnindex" type="text" label="Enter key column index" helpMessage='Any new line character will be removed from the value string' >
	<aui:validator name="digits"></aui:validator>
	<aui:validator  name="required "  errorMessage="Field is required" />
               <aui:validator name="min">0</aui:validator>
              <aui:validator name="max">10</aui:validator>
	</aui:input>
	<aui:button name="Save" value="Save" type="submit"  />

</aui:form> 
