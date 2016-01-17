<%@include file="/html/init.jsp" %>
<portlet:resourceURL var="fetchWordsResourceURL" />

<script src="http://code.jquery.com/jquery-1.9.1.js"></script>

<input type="text"  name="sourceSelect" id="sourceSelect"  />
<div>
<liferay-util:include page="${renderPath}" portletId="${renderPortletId}" >
   </liferay-util:include>
   </div>

<div id="result">

</div>
<script>
	alert("hii");
	 $(function () {
	      $("#sourceSelect").bind('input', function() {
	   
	    	  var nameVal = jQuery("#sourceSelect").val();
	   	      alert(nameVal);
	   	       jQuery.ajax({
	   	                url :'<%=fetchWordsResourceURL%>',
	   	                data:{cname:nameVal},
	   	                type: "POST",
	   	            dataType: "json",
	   	             success: function(data){ 
	   	                          
	                    
	   	                    }
	   	            });//jquery ajax
	    	  
	    	  
	      });
	   });
    
</script>
