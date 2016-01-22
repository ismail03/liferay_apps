<%@page import="com.liferay.portal.service.ThemeLocalServiceUtil"%>
<%@ include file="/html/init.jsp" %>
<liferay-theme:defineObjects />

<%@ taglib uri="http://liferay.com/tld/theme" prefix="theme" %>
<theme:defineObjects/> 	         	



<div id="main-wrapper" class="application-section sub-page-wrapper">
<!--#include file="header-subheader.html"-->
	 <!-- global error message start -->
	<div class="global-error">
    	<div class="container">Please answer the questions highlighted below<a href="#"><i class="fa fa-times-circle"></i></a></div>
  	</div>
  	<!-- global error message end -->
  	<!-- main section start-->
    <section class="section">
    	<!-- main container start-->
        <div class="container">
        	<!-- details field steps link section start-->
            <div class="steps-row flexslider text-center" id="step-carousel">
                <ul class="slides clearfix">
                    <li id="icon1" class="completed"> 
                        <a href="#"><div>Get Started</div></a>
                    </li>
                    <li id="icon2" class="flex-active-slide progressing">
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
            <!-- details field steps link section end-->
            <!-- row start-->
            <div class="row-blk sticky-main">
            	<!-- column 8 article start-->
				<article class="left-column grid-8 form-warp">
				<h1>About you</h1>
				<button type="button" class="button button-secondary button-small save-button"><i class="fa fa-download"></i> SAVE</button>
				<span class="desc-content">
					<p>Please enter your details accurately and truthfully. The information you provide will be used to assess your loan request and stored for any future applications.  We may share your information with other members of our group and where relevant with credit reference agencies and other companies for use in credit decisions, fraud prevention and to pursue debtors.  For full details see our <a href="#">privacy policy.</a></p>
				</span>
				<!-- Personal Information start-->
				<div class="form-section aboutyou">
				<div class="sub-division-row first-form">
					<div class="form-first">
						<h6>What is your loan for?</h6>
						<div class="purpose-of">
							<!-- What is your loan for select drop down start -->
							<div class="form-row purpose-of-row">
								<div class="form-inner-field">
								    <div class="drop-down">
								        <select data-placeholder="Please select purpose of loan" id="purpose-of" class="select-drop-down">
								        	<option value=""></option>
								            <option value="Car purchase or repair">Car purchase or repair</option>
								            <option value="Home improvements">Home improvements</option>
								            <option value="White goods/family items">White goods/family items</option>
								            <option value="Pay a bill/pay bills">Pay a bill/pay bills</option>
								            <option value="Special occasion">Special occasion</option>
								            <option value="Holiday or travel">Holiday or travel</option>
								            <option value="One-off purchase">One-off purchase</option>
								            <option value="Subsistence">Subsistence</option>
								            <option value="Other">Other</option>
								        </select>
								    </div>
								    <div class="error-message"><strong><i class="fa fa-info-circle"></i>This field is mandatory</strong></div>
								</div>
							</div>
							<!-- What is your loan for select drop down end -->
							<div id="others" class="form-row">
								<div class="form-inner-field">
									<label><span>Please enter what your loan is for</span></label>
									<input type="text" value="" class="text-box alphabetonly commoncheck" id="otherpurpose">
									<div class="help-icon"><i class="fa fa-info-circle"></i></div>
								</div>
								<div class="error-message"><strong>Please tell us what you need the loan for or select one of the drop down options</strong></div>
								<div class="help-message">This is the name by which most people call you</div>
							</div>
						</div>
						<!-- Your details form field start -->
						<div class="title-icon">
							<h6><img src="${themeDisplay.getPathThemeImages()}/personal-icon.png">Your details</h6>
						</div>
						<div class="form-first-row">
							<div class="form-row title-gender-row">
								<div class="form-inner-field">
								    <label><span>Title</span></label>
								    <div class="drop-down">
								        <select name="speed" data-placeholder="Please select a title" id="title-gender" class="select-drop-down">
								        	<option value="Miss">Miss</option>
								        	<option value="Ms">Ms</option>
								        	<option value="Mr">Mr</option>
          									<option value="Mrs">Mrs</option>
          									<option value="Dr">Dr</option>
          								</select>
								    </div>
								</div>
								<div class="error-message"><strong><i class="fa fa-info-circle"></i>This field is mandatory</strong></div>
							</div>
							<div class="form-row">
								<div class="form-inner-field">
									<label><span>First name</span></label>
									<input type="text" value="" class="text-box alphabetonly commoncheck" id="firstname">
									<div class="help-icon"><i class="fa fa-info-circle"></i></div>
								</div>
								<div class="error-message"><strong>Please enter your first name</strong></div>
								<div class="help-message">This is the name by which most people call you</div>
							</div>
							<div class="form-row">
								<div class="form-inner-field">
									<label><span>Last name</span></label>
									<input type="text" value="" class="text-box alphabetonly commoncheck" id="Lname">
									<div class="help-icon"><i class="fa fa-info-circle"></i></div>
								</div>
								<div class="error-message"><strong>Please enter your last name</strong></div>
								<div class="help-message">This is your surname / family name</div>
							</div>
							<div class="form-row">
								<div class="form-inner-field">
									<label><span>Email address</span></label>
									<input type="text" value="" class="text-box emailonly" id="femail">
									<div class="help-icon"><i class="fa fa-info-circle"></i></div>
									<button id="apply-valid" class="button button-tertiary">Apply</button>
								</div>
								<div id="valid-address">
									<img src="${themeDisplay.getPathThemeImages()}/preloader.GIF" alt="" class="valid-preloader">
									<div class="alert-message">It looks like someone has already created an account with this email address. Please login with your details or use a different email address</div>
								</div>
								<div class="error-message"><strong>Please enter a valid email address</strong></div>
								<div class="help-message">Your email address is required so we can contact you about your account and so you can login later.</div>
							</div>
							<div class="form-row">
								<div class="form-inner-field">
									<label><span>Re-enter your email address</span></label>
									<input type="text" value="" class="text-box emailonly" id="remail">
									<div class="help-icon"><i class="fa fa-info-circle"></i></div>
								</div>
							</div>
							<div class="form-row">
							<div class="form-inner-field">
								<label><span>Create password</span></label>
								<input type="password" value="" class="text-box" id="password" placeholder="***********">
								<div class="help-icon"><i class="fa fa-info-circle"></i></div>
							</div>
							<div class="error-message"><strong>Please enter a valid password. Your password must be at least 6 characters long and include a number</strong></div>
							<div class="help-message">Your password must be at least 6 characters long and include a number</div>
						</div>
						<div class="form-row squestionrow">
							<div class="form-inner-field">
							    <label><span>Security Question</span></label>
							    <div class="drop-down">
							        <select name="speed" data-placeholder="Options presented in drop down" id="squestion">
							        	<option value="What is your mother’s maiden name">What is your mother’s maiden name</option>
							            <option value="In which town/city were you born?">In which town/city were you born?</option>
							            <option value="What was the name of your primary school">What was the name of your primary school</option>
							            <option value="What was the name of your first pet">What was the name of your first pet</option>
							        </select>
							    </div>
							</div>
							<div class="error-message"><strong>This field is mandatory</strong></div>
						</div>
						<div class="form-row">
							<div class="form-inner-field">
								<label><span>Answer</span></label>
								<input type="text" value="" class="text-box commoncheck" id="answer-question">
								<div class="help-icon"><i class="fa fa-info-circle"></i></div>
							</div>
							<div class="error-message"><strong>This field is mandatory</strong></div>
							<div class="help-message">Enter your security answer</div>
						</div>
						<p>Marketing preferences: From time to time Square Today would like to contact you about offers and messages we think would be of interest to you.  We never pass your details to third parties without your consent.  Please select how you would like to receive promotional communications from Square Today:<br/> <br/></p>
						<div class="form-row">
							<div class="marketing-check-box checkBox">
								<input type="checkbox" id="sms" class="formcheck" name="checkbox">
								<label for="sms"><span>SMS</span></label>

								<input type="checkbox" id="email" class="formcheck" name="checkbox">
								<label for="email"><span>Email</span></label>

								<input type="checkbox" id="post" class="formcheck" name="checkbox">
								<label for="post"><span>Post</span></label>

								<input type="checkbox" id="nomarketing" class="formcheck" name="checkbox">
								<label for="nomarketing"><span>No marketing</span></label>
							</div>
							<div class="error-message margin-left-zero"><strong>This field is mandatory</strong></div>
						</div>
						<p>Square Today takes your privacy very seriously.  You can find information on our <a href="#"><u>privacy policy</u></a> by clicking here</p>	
							<div class="form-row marital-status-row">
								<div class="form-inner-field">
								    <label><span>Marital status</span></label>
								    <div class="drop-down">
								        <select name="speed" data-placeholder="Please enter your marital status" id="marital-status" class="select-drop-down">
								        	<option value="Choose an option">Choose an option</option>
								        	<option value="Single">Single</option>
								        	<option value="Married">Married</option>
								        	<option value="Divorced">Divorced</option>
          									<option value="Separated">Separated</option>
          									<option value="Living with Partner">Living with Partner</option>
          								</select>
								    </div>
								</div>
								<div class="error-message"><strong><i class="fa fa-info-circle"></i>Please enter your marital status</strong></div>
							</div>
		                    <div class="form-row">
								<div class="form-inner-field">
								    <label><span>No. of dependents</span></label>
								    <div class="">
								    	<input type="text" value="" class="text-box quantity number commoncheck" id="nodep" maxlength="2">
								    	<div class="help-icon"><i class="fa fa-info-circle"></i></div>
								    </div>
								</div>
								<div class="error-message"><strong>This field is mandatory. Enter 0, if not applicable</strong></div>
								<div class="help-message">Please enter the number of children/dependents you are responsible for. You may enter zero.</div>
							</div>
							<div class="form-row small-form-row add-text-box">
								<div id="date-of-birth" class="form-inner-field clearfix">
									<label><span>Date of birth</span></label>
									<div class="small-box dob25">
										<input type="text" value="" class="small-text-box number commoncheck nodep dobinput dobIn1" id="dob1" placeholder="DAY" maxlength="2">
									</div>
									<div class="small-box dob50">
										<div class="drop-down">
											<select name="speed" data-placeholder="Month" id="dob2" class="dobIn2 select-drop-down">
												<option value=""></option>
												<option value="01">January</option>
												<option value="02">February</option>
												<option value="03">March</option>
												<option value="04">April</option>
												<option value="05">May</option>
												<option value="06">June</option>
												<option value="07">July</option>
												<option value="08">August</option>
												<option value="09">September</option>
												<option value="10">October</option>
												<option value="11">November</option>
												<option value="12">December</option>
											</select>
										</div>
									</div>
									<div class="small-box dob25">
										<input type="text" value="" class="small-text-box number commoncheck nodep dobinput dobIn3 last-input" id="dob3" placeholder="YEAR" maxlength="4">
									</div>
								</div>
								<div class="error-message"><strong>This field is mandatory</strong></div>
							</div>
							<div class="form-row">
								<div class="form-inner-field">
									<label>
										<span>Home telephone number <br><div class="formInnerText">Optional</div></span>
									</label>
									<input type="text" value="" class="text-box number" id="homenumber" maxlength="14">
									<div class="help-icon"><i class="fa fa-info-circle"></i></div>
								</div>
								<div class="help-message">Please enter your home phone number, if you have one</div>
							</div>
							<div class="form-row">
								<div class="form-inner-field">
									<label><span>Mobile number</span></label>
									<input type="text" value="" class="text-box number commoncheck" id="mobilenumber" placeholder="" maxlength="14">
									<button type="button" class="noverify">Send code</button>
								</div>
								<div class="error-message"><strong>Your mobile number</strong></div>
							</div>
							<div class="smsalert">
								<p>You will shortly receive an SMS message to the number you provided. Please enter the code you received here</p>
							</div>
							<div class="form-row">
								<div id="smsverfiy" class="form-inner-field">
									<label><span>SMS verification code</span></label>
									<input type="text" value="" class="text-box number commoncheck" id="smscode" placeholder="" maxlength="5">
									<div class="help-icon"><i class="fa fa-info-circle"></i></div>
								</div>
								<div class="error-message"><strong>Your code doesn't match please request another</strong></div>
								<div class="help-message">Enter the code sent to your mobile number or request a new code</div>
								<div class="resend">
									<div class="infoText"> if you didn't receive your code check your mobile number is correct and send a new code</div>
									<button type="text" class="button newCode">Request new code</button>
								</div>
							</div>
						</div>
						<!-- Your details form field end -->
					</div>
				</div>
				<!-- your Address details start -->
				<div class="sub-division-row form-second-common form-third">
					<span class="title-icon">
						<h6><img src="${themeDisplay.getPathThemeImages()}/address-icon.png"> Your Address</h6>
					</span>
					<div>
						<div class="address-block">
							<div class="address-details">
								<div class="form-row">
									<div class="form-inner-field postcode">
										<label><span>Postcode</span></label>
										<input type="text" value="" class="text-box" id="postcode" placeholder="AB15XY" maxlength="8">
										<button id="addressbutton" class="button button-white" disabled="disabled">Find Address</button>
									</div>
									<!-- <div class="help-message">Please enter your post code</div> -->
									<div class="error-message"><strong>This field is mandatory</strong></div>
								</div>
								<div class="address-list">
									<div class="preloader"></div>
									<div id="choose-address">
									    <h6>Please select your address.</h6>
									    <div class="list-of-address" id="address-list">
									        <ul id="address-list-inner">
									            <li><span class="door-number">20</span> <span class="street-name">Becmead Avenue,</span><span class="countryName">Harrow, Middlesex</span> HA3 8EY</li>
									           <li><span class="door-number">21</span> <span class="street-name">Becmead Avenue,</span><span class="countryName">Harrow, Middlesex</span> HA3 8EY</li>
									           <li><span class="door-number">22</span> <span class="street-name">Becmead Avenue,</span><span class="countryName">Harrow, Middlesex</span> HA3 8EY</li>
									           <li><span class="door-number">23</span> <span class="street-name">Becmead Avenue,</span><span class="countryName">Harrow, Middlesex</span> HA3 8EY</li>
									           <li><span class="door-number">24</span> <span class="street-name">Becmead Avenue,</span><span class="countryName">Harrow, Middlesex</span> HA3 8EY</li>
									           <li><span class="door-number">25</span> <span class="street-name">Becmead Avenue,</span><span class="countryName">Harrow, Middlesex</span> HA3 8EY</li>
									           <li><span class="door-number">26</span> <span class="street-name">Becmead Avenue,</span><span class="countryName">Harrow, Middlesex</span> HA3 8EY</li>
									        </ul>
									    </div>
									    <button id="confirmbutton" class="button button-white">Use this address</button>
									</div>
								</div>
								<div id="choosed-address" class="form-row"></div>
								<!-- <div class="form-row small-form-row">
									<div class="form-inner-field">
										<label><span>House number</span></label>
										<input type="text" value="" class="text-box number" id="housenumber">
										<div class="help-icon"><i class="fa fa-info-circle"></i></div>
									</div>
									<div class="error-message"><strong>This field is mandatory</strong></div>
									<div class="help-message">Please enter your house number</div>
								</div>
								<div class="form-row">
									<div class="form-inner-field">
										<label><span>Street</span></label>
										<input type="text" value="" class="text-box" id="street">
										<div class="help-icon"><i class="fa fa-info-circle"></i></div>
									</div>
									<div class="error-message"><strong>This field is mandatory</strong></div>
									<div class="help-message">Please enter the name of the street on which your house is located</div>
								</div>
								<div class="form-row">
									<div class="form-inner-field">
										<label><span>County</span></label>
										<input type="text" value="" class="text-box alphabetonly" id="county">
										<div class="help-icon"><i class="fa fa-info-circle"></i></div>
									</div>
									<div class="error-message"><strong>This field is mandatory</strong></div>
									<div class="help-message">Please enter the name of the county your location falls under</div>
								</div> -->
								<div class="form-row">
									<div class="form-inner-field">
										<label><span>Type of occupancy</span></label>
										<div class="radio radiobutton radioblock occupancy-blk clearfix">
											<input type="radio" id="radio1" class="radioown" name="OwnRental">
											<label for="radio1"><span>Own</span></label>
											<input type="radio" id="radio2" class="radioown" name="OwnRental">
											<label for="radio2"><span>Rent</span></label>
											<input type="radio" id="radio3" class="radioown" name="OwnRental">
											<label for="radio3"><span>Live with parents</span></label>
										</div>
									</div>
									<div class="error-message"><strong><i class="fa fa-info-circle"></i>This field is mandatory</strong></div>
								</div>
								<div class="form-row small-form-row add-text-box how-long-u">
									<div class="form-inner-field clearfix">
										<label><span>Please enter how long you have lived at this address</span></label>
										<div class="small-box">
											<input type="text" value="" class="text-box small-text-box number" placeholder="" maxlength="2" id="time1">
											<label><span>Years</span></label>
										</div>
										<div class="small-box">
											<input type="text" value="" class="text-box number" placeholder="" maxlength="2" id="time2">
											<label><span>Months</span></label>
										</div>
									</div>
									<!--<div class="help-message">Please let us know in years & months, for how long you have lived at this address</div>-->
									<div class="error-message"><strong>This field is mandatory</strong></div>
								</div>					
							</div>
						</div>
					</div>
				</div> 
				<!-- your Address details end -->
				<!-- your bank details start -->
				<div class="sub-division-row form-third-common form-fifth"> 
					<span class="title-icon">
						<h6><img src="${themeDisplay.getPathThemeImages()}/bank-icon.png">Your bank details</h6>
					</span>
					<div>
						<div class="form-row">
							<div class="form-inner-field">
								<label><span>Account name</span></label>
								<input type="text" value="" class="text-box alphabetonly" id="bankname">
								<div class="help-icon"><i class="fa fa-info-circle"></i></div>
							</div>
							<div class="help-message">Please enter your name as it's shown on your account</div>
							<div class="error-message"><strong>This field is mandatory</strong></div>
						</div>
						<div class="form-row small-form-row add-text-box sort-code">
							<div class="form-inner-field clearfix">
								<label><span>Sort Code</span></label>
								<div class="clearfix">
									<div class="small-box">
										<input type="text" value="" class="text-box small-text-box number" id="sort1" placeholder="00" maxlength="2">
									</div>
									<div class="small-box">
										<input type="text" value="" class="text-box small-text-box number" id="sort2" placeholder="00" maxlength="2">
									</div>
									<div class="small-box">
										<input type="text" value="" class="text-box small-text-box number" id="sort3" placeholder="00" maxlength="2">
									</div>
								</div>
								<div class="error-message margin-left-zero"><strong>Please enter a valid UK sort code</strong></div>
							</div>
							<!--  <div class="help-message">Enter the 6 digit sort code</div>-->
							<div class="error-message"><strong>This field is mandatory</strong></div>
						</div>
						<div class="form-row small-form-row">
							<div class="form-inner-field">
								<label><span>Account Number</span></label>
								<input type="text" value="" class="text-box number" id="accountnumber" maxlength="18">
								<div class="help-icon"><i class="fa fa-info-circle"></i></div>
							</div>
							<div class="help-message">Enter your bank account number</div>
							<div class="error-message"><strong>Please enter a valid UK account number</strong></div>
						</div>
					</div>
				</div>
				<!-- your bank details end -->
				<!-- contiune and save button section start -->
				<div class="final-step clearfix">
					<button type="button" class="button button-primary next-pages final-valid fL grey-button" data-link="affordability.shtml">CONTINUE <i class="fa fa-chevron-right"></i></button>
					<button type="button" class="button button-secondary button-small fR"><i class="fa fa-download"></i> SAVE</button>
				</div>
				<!-- contiune and save button section end -->
				<!-- back and Cancel button section start -->
				<div class="bottom-button-row clearfix">
					<div class="fL"> <a href="#"> <i class="fa fa-chevron-left" onClick="goBack()"></i> Back </a> </div>
					<div class="fR"> <a href="winBack.shtml"> <i class="fa fa-times"></i> Cancel </a> </div>
				</div>
				<!-- back and Cancel button section end -->
				</div>
				<!-- Personal Information end-->
				</article>
				<!-- column 8 article end-->
                <!-- Sidebar -->
                
				<%@ include file="/html/loanjourneycontroller/aside.jsp" %>

                <!-- Sidebar end -->
                <!-- Sticky side bar bottom boundary -->
                <div id="stick-offset" class="clear"></div>
            </div>
            <!-- row end-->
        </div>
    </section>
    <!-- main section end-->    
<!--#include file="footer.html"-->
</div>

