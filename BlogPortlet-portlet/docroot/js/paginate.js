(function($){
	$(document).ready(function(){
		$.fn.customPaginate = function(options){
			
			var paginationContainer =this;
			var itemsToPaginate;
			var defaults = {
					itemsPerPage : 6
			};
			var settings = {};
			
			$.extend(settings,defaults,options);
			itemsToPaginate = $(settings.itemsToPaginate);
			
			var numberofPaginationLink = Math.ceil((itemsToPaginate.length/settings.itemsPerPage));
			
			$("<ul></ul>").prependTo(paginationContainer);
			paginationContainer.find("ul").addClass("clearfix");
			
			for(var index=0 ; index<numberofPaginationLink ; index++)
				{
				  paginationContainer.find("ul").append("<li>"+(index+1)+"</li>");
				}
			itemsToPaginate.filter(":gt("+(settings.itemsPerPage-1)+")").hide();
			//paginationContainer.find("ul li").addClass("clearfix");
			paginationContainer.find("ul li").on("click",function(){
				
				var linkNumber = $(this).text();
				var itemsToHide = itemsToPaginate.filter(":lt("+((linkNumber-1) * settings.itemsPerPage)+")");
				$.merge(itemsToHide,itemsToPaginate.filter(":gt("+((linkNumber * settings.itemsPerPage)-1)+")"));
				itemsToHide.hide();
				var itemsToShow = itemsToPaginate.not(itemsToHide)
				itemsToShow.show();
			});
			
		}
	});
}(jQuery));