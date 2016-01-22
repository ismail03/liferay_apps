<%@ include file="/html/init.jsp" %>


<portlet:renderURL var="aboutyouurl" windowState="<%=WindowState.MAXIMIZED.toString()%>">
	<portlet:param name="id" value="getstarted" />
	<portlet:param name="pagename" value="aboutyou" />
	<portlet:param name="borrowamount" value="${borrowamount}"/>
	<portlet:param name="term" value="${term}"/>
	<portlet:param name="monthlyrepay" value="${monthlyrepay}"/>
	<portlet:param name="totalrepay" value="${totalrepay}"/>

</portlet:renderURL>
<div  class="application-section sub-page-wrapper">
<!--#include file="header-subheader.html"-->
<div class="global-error">
    <div class="container">Please answer the questions highlighted below<a href="#"><i class="fa fa-times-circle"></i></a></div>
  </div>
    <section class="section">
        <div class="container">
            <!-- steps-row start start-->
            <div class="steps-row flexslider text-center" id="step-carousel">
                <ul class="slides clearfix">
                    <li id="icon1" class="flex-active-slide progressing"> 
                        <a href="#"><div>Get Started</div></a>
                    </li>
                    <li id="icon2">
                        <a href="#"><div>About you</div></a>
                    </li>
                    <li id="icon3">
                        <a href="#"><div>Affordability</div></a>
                    </li>
                    <li id="icon4">
                        <a href="#"><div>Loan review</div></a>
                    </li>
                    <li id="icon5">
                        <a href="#"><div>Confirmation</div></a>
                    </li>
                </ul>
            </div>
             <!-- steps-row start end-->
            <div class="row-blk sticky-main">
                <article class="left-column grid-8">
                <!-- Eligibility Criteria -->
                    <div class="bottom-fourty">
                        <h1>Eligibility</h1>
                        <div class="intro-text">
                            <strong>Before you start, make sure you can say yes to all of the below</strong>
                        </div>
                        <div class="common_list">
                            <ul>
                                <li>You are 18 or older</li>
                                <li>You are a UK resident or have the right to work in the UK</li>
                                <li>You don't already have a loan with us that you are still repaying</li>
                                <li>You are employed and receiving a regular wage</li>
                                <li>You are not currently bankrupt, insolvent or using debt management </li>
                                <li>You do not have any outstanding county court judgments or sheriff court decrees</li>
                                <li> You have a mobile number we can contact you on about your account</li>
                                <li>You have a UK bank account with a debit card, that we will pay your loan into</li>
                            </ul>
                        </div>
                        <div class="gray-bg">
                            <div class="checkBox">
                                <input type="checkbox" id="eligible" name="checkbox">
                                <label for="eligible"><span>I <strong>am eligible</strong> to continue with the loan application</span></label>
                            </div>
                        </div>
                        <!-- <a href="#" class="btn" id="eligible">Yes, I am eligible to continue</a> -->
                    </div>
                    <!-- Information application -->
                    <div class="disabled_block" id="eligibility_main">
                        <div id="eligibility_info">
                             <div class="intro-text"><strong>You will also need to have ready the following information for your application</strong></div>
                            <div class="common_list">
                                <ul>
                                    <li>Your employer's details</li>
                                    <li>Your bank account details</li>
                                    <li>Your address details for the past 12 months</li>
                                    <li>Detail of your monthly outgoings</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- Navigate option -->
                    <div class="final-step clearfix">
                        <button type="button" id="conTBtn" class="button button-primary next-pages fL grey-button" data-link="${aboutyouurl}">CONTINUE</button>
                    </div>
                    <div class="bottom-button-row clearfix">
                        <div class="fR"> <a href="winBack.shtml"> <i class="fa fa-times"></i> Cancel </a> </div>
                    </div>
                </article>
                <!-- Sidebar -->
			<%@ include file="/html/loanjourneycontroller/aside.jsp" %>
                
                <!-- Sidebar end -->
                <!-- Sticky side bar bottom boundary -->
                <div id="stick-offset" class="clear"></div>
            </div>
        </div>
    </section>
<!--#include file="footer.html"-->
</div>

