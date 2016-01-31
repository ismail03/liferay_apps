<%@page import="com.liferay.portal.kernel.util.DateUtil"%>
<%@page import="com.liferay.portal.kernel.util.Validator"%>
<%@page import="com.liferay.portal.kernel.portlet.LiferayWindowState"%>
<%@page import="javax.portlet.PortletURL"%>
<%@page import="java.util.TreeSet"%>
<%@page import="java.util.SortedSet"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Set"%>
<%@page import="java.util.HashSet"%>
<%@page import="com.liferay.portal.kernel.util.StringPool"%>
<%@page import="java.util.List"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />
<%-- <script language="javascript" type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js">
</script>
<script language="javascript" type="text/javascript" src="<%=request.getContextPath()%>/js/paginate.js">
</script>
<script language="javascript" type="text/javascript" src="<%=request.getContextPath()%>/js/custom.js">
</script> --%>



 
   		<div class="container">
   				<section class="blog-content-wapper">
 						<!-- main row stat -->
					 <div class="row-blk">
							 <div class="grid-8 leftside-wapper">
											 <%! private int curPage; %>
											<%List<String> articleList=(List<String>)renderRequest.getAttribute("articles");

													if(Validator.isNotNull(articleList))
													{
																for(String str:articleList)
																{	
																	String[] val=str.split(";");
																	String img=val[0];
																	String title=val[1];	
																	String summary=val[2];	
																	String modifydate=val[3];	
																	Integer year=Integer.parseInt(val[4]);   
																    String friendlyurl = val[5];
															
																%>
			     <!--  blogsection right side 8 col start -->     
														        <!--  blogsection right side search result start-->
														         <div class="blog-list">
														             <a href="<%=friendlyurl%>" class="clearfix">
														                 <img src="<%=img %>" alt="" class="fL">
														                 <h6><%=title %> </h6>
														                 <p><%=summary %>
														                     <span><%=modifydate %></span>
														                 </p>
														             </a>
														         </div>           
														  <%	
			                                                    }
																if(articleList.size()>6)
																{
																%>       
																		
																         <!--  blogsection right side search result end -->
																          <div class="my-account-pagination">
																             <ul class="clearfix">
																                 <li class="pages">page</li>
																                 <%   
																                    curPage=(Integer)renderRequest.getAttribute("curPages");
																                 	PortletURL myPrevRender=renderResponse.createRenderURL();
																                 	myPrevRender.setWindowState(LiferayWindowState.NORMAL);
																                 	myPrevRender.setParameter("pageno", Integer.toString(curPage-1));
																                 %>
																                 <li class=""><a href="<%=myPrevRender.toString() %>"><i class="fa fa-chevron-left"></i></a></li>
																                 
																                 <%int noOfPages=(Integer)renderRequest.getAttribute("noOfPages");
																                 curPage=(Integer)renderRequest.getAttribute("curPages");
																                 for(int i=1;i<=noOfPages;i++)
																                 {
																                	 PortletURL myPageRender=renderResponse.createRenderURL();
																                	 myPageRender.setWindowState(LiferayWindowState.NORMAL);
																                	 myPageRender.setParameter("pageno", Integer.toString(i));
																                	 String actClass=(i==curPage)?"active":"";
																                 %>
																                 <li><a href="<%=myPageRender.toString() %>" class="<%=actClass %>" ><%=i %></a></li>
																                 <!-- <li><a href="#">2</a></li>
																                 <li><a href="#">3</a></li> -->
																                 <%
																                 }
																                 curPage=(Integer)renderRequest.getAttribute("curPages");
																                 PortletURL myNextRender=renderResponse.createRenderURL();
																                 myNextRender.setWindowState(LiferayWindowState.NORMAL);
																                 myNextRender.setParameter("pageno", Integer.toString(curPage+1));           	
																              
																                 %>
																                 
																                 <li class=""><a href="<%=myNextRender.toString() %>"><i class="fa fa-chevron-right"></i></a></li>
																             </ul>
																         </div>
																     
																<% 
																}
														}
											%> 
     							</div>	
     	<div class="grid-4 rightside-wapper">
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
                                 <%	List<String> tagList= (List<String>)renderRequest.getAttribute("tag");
    							 for(String tag : tagList)							     {					
    								 
    								 PortletURL myRenderURL=renderResponse.createRenderURL();
    								 myRenderURL.setWindowState(LiferayWindowState.NORMAL);
    								 myRenderURL.setParameter("tags", tag);
							    	 %>
							    	  <li><a href="<%=myRenderURL.toString()%>"><%=tag %></a></li>
							    <%
							     }							     	
							     %>
                           
                               
                               
                            </ul>
                        </div>
                        <!-- our-topics section start-->
                         <!-- our-topics section start-->
                        <div class="rightside-list">
                            <h6>blog archive</h6>
                            <ul>
                            <% Set<Integer> yrset=(Set<Integer>)renderRequest.getAttribute("yrset");
                            
                            if(!yrset.isEmpty())
                            {                            	
                            	for(int yr:yrset)
                            	{
                            		 PortletURL renderURL=renderResponse.createRenderURL();
                            		 renderURL.setWindowState(LiferayWindowState.NORMAL);
                            		 renderURL.setParameter("year", Integer.toString(yr));
                            		%>
                            		<li><a href="<%=renderURL.toString()%>"><%=yr %></a></li>
                          	<%
                            	}
                            	
                            }
                            
                            %>
                                
                                
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
                        <!-- blog email subscribe form end-->
                    </div>
                    <!--  blogsection right side 4 col end -->
                </div>
     
     
      </section>
     
     
     
    </div>
  
          
          
