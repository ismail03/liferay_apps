

<%@ include file="/html/init.jsp" %>
<portlet:renderURL var="getStartedUrl"  windowState="<%=WindowState.MAXIMIZED.toString()%>"  >
<portlet:param name="id" value="getstarted"/>
<portlet:param name="pagename" value="getstarted"/>
<portlet:param name="borrowamount" value="brwamt"/>

	<portlet:param name="term" value="trm"/>
	<portlet:param name="monthlyrepay" value="mnrpy"/>
	<portlet:param name="totalrepay" value="totrpy"/>
	
</portlet:renderURL>
<div class="tab-section">
    <div class="tab-content-blk" id="tab-1">
        <section class="section calculator-section">
            <div class="container">
                <div class="sliderWrap">
                    <a href="#glance-table" class="button show-device button-secondary quote-tab-1">Get a quick quote</a>                  
                </div>
                <div class="loanContent">
                    <div id="quickQuote" class="row-blk">                       
                        <article class="grid-7 calculation_section eqc calc-tab-1">
                            <h2>Get a quick quote</h2>
                            <!-- Calculation -->
                            <div id="set_range">
                                <div id="slider-tab-one" class="slider-tab clearfix">
                                    <a href="#brSlider" class="open-state active">Loan amount</a>
                                    <a href="#mnSlider">Repayment time</a>
                                </div>
                                <!-- Borrow -->
                                <div class="sliderRowWrap" id="brSlider">
                                    <div class="range_field clearfix">
                                        <div class="calcLabel fL">I would like to borrow</div>
                                        <div class="currentValueField fR">
                                            <label>&pound;</label>
                                         
                                         <c:choose>
                                         <c:when test="${amount le 850}">
                                           <input type="text" value="<c:out value="${amount}" default="500"></c:out>" id="borrow_field" />
                                         </c:when>
                                         <c:otherwise>
                                          <input type="text" value="500" id="borrow_field" />
                                         </c:otherwise>
                                         </c:choose>
                                        </div>
                                    </div>
                                    <div class="slider_row">
                                        <div class="minus mp" id="brMinus"></div>
                                        <div class="plus mp" id="brPlus"></div>
                                        <div id="slider-range"></div>
                                        <div class="repAPR clearfix">
                                            <div class="fL"><strong>Min</strong> £200</div>
                                            <div class="fR"><strong>Max</strong> £850</div>
                                        </div>
                                    </div>
                                </div><!-- Borrow -->
                                <!-- Pay back -->
                                <div class="sliderRowWrap" id="mnSlider">
                                    <div class="range_field clearfix">
                                        <div class="calcLabel fL">And pay it back over a period of</div>
                                        <div class="currentValueField fR">                                
                                            <div id="month_field"><span>5</span> <strong>Months</strong></div>
                                        </div>
                                    </div>
                                    <div class="slider_row">
                                        <div class="minus mp" id="mnMinus"></div>
                                        <div class="plus mp" id="mnPlus"></div>
                                        <div id="slider-month"></div>
                                        <div class="repAPR clearfix">
                                            <div class="fL"><strong>Min</strong> 5 Months </div>
                                            <div class="fR"><strong>Max</strong> 9 Months</div>
                                        </div>
                                    </div>
                                </div><!-- Pay back -->
                                <div class="repayMent">
                                Late repayment can cause you serious money problems. <strong>For help go to <a href="#">moneyadviceservice.co.uk</a></strong>
                            </div>
                            </div><!-- Calculation -->
                        </article>
                        <aside class="grid-5 calcResults eqc tabAside">
                            <div id="quote_glance" class="yellowPatch">
                                <div id="glance-table">
                                    <h4>Your quote at a glance</h4>
                                    <a href="#" id="galnce-close"><i class="fa fa-times"></i></a>
                                    <div class="glance-visible-area">
                                        <div class="white-patch-mobile white-patch-tab-1">
                                            <table width="100%">
                                                <tr>
                                                    <td>Monthly Repayments</td>
                                                    <td align="right" width="40%"><div id="monthly_payment">&pound;<span>40.05</span></div></td>
                                                </tr>
                                                <tr>
                                                    <td>Total repayable</td>
                                                    <td align="right"><div id="total_payable">&pound;<span>900.00</span></div></td>
                                                </tr>
                                                <tr>
                                                    <td>Representative APR</td>
                                                    <td align="right"><div id="repAPR"><span>212.9</span>%</div></td>
                                                </tr>
                                            </table>
                                            <div class="button-row hide-device">
                                                <a href="#" class="button" >Apply Now</a>
                                                <!-- <a href="#" class="arrowLink hide-device"><i class="fa fa-caret-right"></i> More info</a> -->
                                            </div>
                                            <div class="more-info show-device">
                                                <div class="clearfix">
                                                    <!-- <a href="#" class="fL">More info</a> -->
                                                    <a href="#" class="rep-ex rep-ex-tab-1 fR">Representative Example</a>
                                                </div>
                                                <p>Use the tabs below to see how much you can borrow.</p>
                                            </div>
                                        </div>
                                        <div class="button-row show-device">
                                            <a href="#" class="button">Apply Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="rep-example" class="loanDetail">
                                <a href="#" id="rep-close"><i class="fa fa-times"></i></a>
                                <h4>Representative Example</h4>
                                <p>Loan amount<strong> &pound;400</strong> repayable over 6 months. Total amount repayable <strong>&pound;744.96</strong> in 6 payments of<strong> &pound;124.16.</strong> Interest <strong>255.5%</strong> pa fixed. Representative APR, illustrative and based on a 30 day month, <strong>0.7%</strong> per day</p>                        
                            </div>
                        </aside>                    
                    </div>
                </div>
            </div>
        </section><!-- Loan Calculation end -->
    </div>
    <div class="tab-content-blk" id="tab-2">
        <section class="section calculator-section">
            <div class="container">
                <div class="sliderWrap">
                    <a href="#glance-table1" class="button show-device button-secondary quote-tab-2">Get a quick quote</a>                  
                </div>
                <div class="loanContent">
                    <div id="quickQuote1" class="row-blk">                       
                        <article class="grid-7 calculation_section eqc calc-tab-2">
                            <h2>Get a quick quote</h2>
                            <!-- Calculation -->
                            <div id="set_range1">
                                <div id="slider-tab-two" class="slider-tab clearfix">
                                    <a href="#brSlider1" class="open-state active">Loan amount</a>
                                    <a href="#mnSlider1">Repayment time</a>
                                </div>
                                <!-- Borrow -->
                                <div class="sliderRowWrap" id="brSlider1">
                                    <div class="range_field clearfix">
                                        <div class="calcLabel fL">I would like to borrow</div>
                                        <div class="currentValueField fR">
                                            <label>&pound;</label>
                                            
                                             <c:choose>
                                         <c:when test="${amount gt  850}">
                                           <input type="text" value="<c:out value="${amount}" default="1500"></c:out>" id="borrow_field1" />
                                         </c:when>
                                         <c:otherwise>
                                          <input type="text" value="1500" id="borrow_field1" />
                                         </c:otherwise>
                                         </c:choose>
                                           
                                        </div>
                                    </div>
                                    <div class="slider_row">
                                        <div class="minus mp" id="brMinus1"></div>
                                        <div class="plus mp" id="brPlus1"></div>
                                        <div id="slider-range1"></div>
                                        <div class="repAPR clearfix">
                                            <div class="fL"><strong>Min</strong> £1,000</div>
                                            <div class="fR"><strong>Max</strong> £5,000</div>
                                        </div>
                                    </div>
                                </div><!-- Borrow -->
                                <!-- Pay back -->
                                <div class="sliderRowWrap" id="mnSlider1">
                                    <div class="range_field clearfix">
                                        <div class="calcLabel fL">And pay it back over a period of</div>
                                        <div class="currentValueField fR">                                
                                            <div id="month_field1"><span>5</span> <strong>Months</strong></div>
                                        </div>
                                    </div>
                                    <div class="slider_row">
                                        <div class="minus mp" id="mnMinus1"></div>
                                        <div class="plus mp" id="mnPlus1"></div>
                                        <div id="slider-month1"></div>
                                        <div class="repAPR clearfix">
                                            <div class="fL"><strong>Min</strong> 5 Months </div>
                                            <div class="fR"><strong>Max</strong> 36 Months</div>
                                        </div>
                                    </div>
                                </div><!-- Pay back -->
                                <div class="repayMent">
                                Late repayment can cause you serious money problems. <strong>For help go to <a href="#">moneyadviceservice.co.uk</a></strong>
                            </div>
                            </div><!-- Calculation -->
                        </article>
                        <aside class="grid-5 calcResults eqc tabAside">
                            <div id="quote_glance1" class="yellowPatch">
                                <div id="glance-table1">
                                    <h4>Your quote at a glance</h4>
                                    <a href="#" id="galnce-close1"><i class="fa fa-times"></i></a>
                                    <div class="glance-visible-area">
                                        <div class="white-patch-mobile white-patch-tab-2">
                                            <table width="100%">
                                                <tr>
                                                    <td>Monthly Repayments</td>
                                                    <td align="right" width="40%"><div id="monthly_payment1">&pound;<span>40.05</span></div></td>
                                                </tr>
                                                <tr>
                                                    <td>Total repayable</td>
                                                    <td align="right"><div id="total_payable1">&pound;<span>2,250.00</span></div></td>
                                                </tr>
                                                <tr>
                                                    <td>Representative APR</td>
                                                    <td align="right"><div id="repAPR1"><span>212.9</span>%</div></td>
                                                </tr>
                                            </table>
                                            <div class="button-row hide-device" >
                                                <a href="#" class="button">Apply Now</a>
                                                <!-- <a href="loan-landing.shtml" class="arrowLink hide-device"><i class="fa fa-caret-right"></i> More info</a> -->
                                            </div>
                                            <div class="more-info show-device">
                                                <div class="clearfix">
                                                   <!--  <a href="#" class="fL">More info</a> -->
                                                    <a href="#" class="rep-ex rep-ex-tab-2 fR">Representative Example</a>
                                                </div>
                                                <p>Use the tabs below to see how much you can borrow.</p>
                                            </div>
                                        </div>
                                        <div class="button-row show-device">
                                            <a href="#" class="button">Apply Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="rep-example1" class="loanDetail">
                                <a href="#" id="rep-close1"><i class="fa fa-times"></i></a>
                                <h4>Representative Example</h4>
                                <p>Loan amount<strong> &pound;400</strong> repayable over 6months. Total amount repayable <strong>&pound;744.96</strong> in 6 payments of<strong> &pound;124.16.</strong> Interest <strong>255.5%</strong> pa fixed. Representative APR. Illustrative and based on a 30 day month, <strong>0.7%</strong> per day</p>                        
                            </div>
                        </aside>                    
                    </div>
                </div>
            </div>
        </section><!-- Loan Calculation end -->
    </div>
</div>


<script type="text/javascript">

$('#tab-1 a').click(function(){
	
	 var url = '<%=renderResponse.encodeURL(getStartedUrl.toString())%>';
	
	  url= url.replace("brwamt",   $("#borrow_field").val()); 
	 url= url.replace("totrpy",  $('#total_payable span').html());
 url= url.replace("trm", $('#month_field span').html());
	 url= url.replace("mnrpy",$('#monthly_payment span').html());
	 window.location.href =url;
});

$('#tab-2 a').click(function(){
	
	 var url = '<%=renderResponse.encodeURL(getStartedUrl.toString())%>';
	
	  url= url.replace("brwamt",   $("#borrow_field1").val()); 
	 url= url.replace("totrpy",  $('#total_payable1 span').html());
url= url.replace("trm", $('#month_field1 span').html());
	 url= url.replace("mnrpy",$('#monthly_payment1 span').html());
	 window.location.href =url;
});
var period = '<c:out value="${period} " default="5" />';
alert(period);
if(period.equals('')){
	
	period = '5';
}
	alert(period);
$('#month_field').html('<span>'+period+'</span> <strong>Months</strong>');
$('#month_field1').html('<span>'+period+'</span> <strong>Months</strong>');
</script>
