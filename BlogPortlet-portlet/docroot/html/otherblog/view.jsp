<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %>
<portlet:defineObjects />

<liferay-portlet:renderURL var="urls" portletName="bloglandingcontroller_WAR_BlogPortletportlet" plid="${plid}" ></liferay-portlet:renderURL>
 <h6>other stories</h6>
                <!--  blogsection right side other stories -->
                <a href="${urls}" >click here</a>
                <c:forEach items="${articles}" var="listItem" begin="0" end="2">
        
        
        <c:set var="stringparts" value="${fn:split(listItem, ';')}" />
        
      

<div class="other-stories">
                    <a href="${stringparts[5]}" class="clearfix">
                        <img src="${stringparts[0]}" alt="" class="fL">
                        <p>${stringparts[1]} 
                        <span>${stringparts[3]}</span>
                        </p>
                    </a>
                </div>
    </c:forEach>
                
                <!--  blogsection right side other stories -->
            
                <!--  blogsection right side other stories -->
              
                <!-- blog search form start-->
                <div class="blogsearch">
                    <h6>SEARCH BLOG</h6>
                    <div class="blogsearch-form">
                        <input type="text" value="" class="">
                        <button class="blogsearchbtn"><i class="fa fa-search"></i></button>
                    </div>
                </div>
                <!-- blog search form end-->
                <!-- our-topics section start-->
                <div class="rightside-list">
                    <h6>Our Topics</h6>
                    <ul>
                      <c:forEach items="${tag}" var="tagname" >
                        <li><a href="#">${tagname} </a></li>
                       
                        </c:forEach>
                    </ul>
                </div>
                <!-- our-topics section start-->

                 <!-- our-topics section start-->
                <div class="rightside-list">
                    <h6>blog archive</h6>
                    <ul>
                       <c:forEach items="${yrset}" var="year" >
                        <li><a href="#">${year} </a></li>
                       
                        </c:forEach>
                    </ul>
                </div>
                <!-- our-topics section start-->
                
                <!-- blog email subscribe form start-->
                <div class="email-subscribe">
                    <h6>email SUBSCRIBE</h6>
                    <div class="email-subscribe-form">
                        <input type="text" value="" class="">
                        <button class="email-subscribe-btn">SIGN UP</button>
                    </div>
                    <div class="error">Please enter your email address</div>
                </div>
