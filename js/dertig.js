Dertig = {
		
		launch : 0,
		dices : [],
		
		/*
		 * Reset all values to defaults
		 */
		clear: function(all) 
		{
			if( all )
				Dertig.launch = 0;
				$("#launch").html('');
				document.querySelector('#point-total').textContent = ''
			if( all )
				for( var i = 0; i < 6; i++ ) 
				{
					Dertig.dices[i] = 0;
					$("#dice" + (i+1)).removeClass().addClass("dice").addClass("empty");
				}
			for( var i = 0; i < 6; i++ ) 
			{
			}
			$(".keep").each(function(incr, elt) 
			{
				$(elt).attr('style', 'visibility:hidden;');
			});
			
		},
		/*
		 * Provide random dice rolls
		 */
		roll: function() 
		{
			if($("#launchBtn").hasClass("disabled") )
			{
				return false;
			}
			
			if( Dertig.launch == 6 )
			{
				Dertig.clear(true);
			}
			else
			{
				Dertig.clear(false);
			}
			
			Dertig.launch++;
			
			for( var i = 0; i < 6; i++ ) 
			{
				var html = $("#dice" + (i+1));
				if( !html.hasClass("selected") ) 
				{
					var value = Math.round(5 * Math.random());
					Dertig.dices[i] = value;
					html.removeClass().addClass("dice").addClass("face" + (value + 1));
				}
			}
			
			$("#launch").html(Dertig.launch);
			if( Dertig.launch == 6 )
			{
				$("#launchBtn").addClass("disabled");
			}
			var totalPoints = Dertig.dices.reduce((a, b) => a + b, 0) + 6
			document.querySelector('#point-total').textContent = totalPoints
		}		
};
