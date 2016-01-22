
<%-- <%@ include file="/html/init.jsp" %> --%>

<aside class="right-column grid-4 sticky-table">
    <div class="details_table" id="side-bar"> 
        <!--<a class="live-chat" href="#"><img src="images/liveChat.png" alt=""/>LIVE CHAT available<span class="dots"></span></a>-->
        <div class="calcResults eqc">
            <h2>What you’re borrowing</h2>
            <div class="borrowDetails">
                <!-- <div class="sideBar-detail">
                    <h4>Useful Documents</h4>
                    <ul>
                        <li><a href="#"><i class="fa fa-file-pdf-o"></i> Our Adequate Explanations</a></li>
                        <li><a href="#"><i class="fa fa-file-pdf-o"></i> Our Adequate Explanations</a></li>
                    </ul>
                </div> -->
                <div class="slideBar-table">
                    <table width="100%">
                        <tr>
                            <td>Your Loan</td>
                            <td>&pound; <c:out value="${borrowamount}" default="0" /> </td>
                        </tr>
                        <tr>
                            <td>Term</td>
                            <td><c:out value="${term}" default="0"></c:out> <span> MONTHS</span></td>
                        </tr>
                        <tr>
                            <td>Representative</td>
                            <td>87% <span>APR</span></td>
                        </tr>
                    </table>
                    <div class="total-details">
                        <table>
                            <tr>
                                <td>Monthly Repayments</td>
                                <td><div id="monthly_payment">&pound; <c:out value="${monthlyrepay}" default="0" /></div></td> 
                            </tr>
                            <tr>
                                <td>Total repayable</td>
                                <td><div id="repAPR">&pound; <c:out value="${totalrepay}" default="0" /></div></td>
                            </tr>
                        </table>
                    </div>
                    <div class="tableMore_info clearfix">
                        <div class="details"> <a href="#">DETAILS</a> </div>
                        <div class="change-loan"> <a href="${cancelurl}">CHANGE LOAN</a> </div>
                    </div>
                </div>
            </div>
            <div class="problem-block">
                Late repayment can cause you serious money problems. <strong>For help go to <a href="mailto:moneyadviceservice.co.uk" title="moneyadviceservice.co.uk">moneyadviceservice.co.uk</a></strong>
            </div>
        </div>
    </div>
</aside>