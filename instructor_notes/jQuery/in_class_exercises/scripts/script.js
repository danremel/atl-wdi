<<<<<<< HEAD
$(function () {
	var CounterCollection = {
	counters: [
		{
			currentValue: 0,
			counterName: 'Errors'
		},
		{
			currentValue: 0,
			counterName: 'Warnings'
		}
	],
	addOneToCounterValue: function (counterIndex) {
		this.counters[counterIndex].currentValue += 1;

		// OPTION 1: find all divs with 'counter' class
		// - loop through until you find div with counterIndex of the one above
		// - update the span with the current value to equal the new current value

		// OPTION 2:
		console.log($(`[data-counter-index="${counterIndex}"]`));
	}
}

	// find the counter container
	var $counterContainer = $('#counter-container');

	// loop through the user's counters
	for(var i = 0; i< CounterCollection.counters.length; i++) {
		
		var counter = CounterCollection.counters[i];

		// for each counter, create a div
		var $newCounterDiv = $('<div>');

		// the div should have a class of counter
		$newCounterDiv.addClass('counter');

		// the div should have a data-counter-index of the current array index
		$newCounterDiv.data('counterIndex', i);

		// the div should have an h1 with the counter name
		var $newCounterHeader = $('<h1>');
			$newCounterHeader.html(counter.counterName);
			$newCounterHeader.attr('id', 'counter-name');
		$newCounterDiv.append($newCounterHeader);

		// the dive should have a span containing the currentValue
		var $currentValueSpan = $('<span>');
			$currentValueSpan.html(counter.currentValue);

		$newCounterDiv.append($currentValueSpan);

		// the div should have a button that says "+1" with an id of 'add-one'
		var $plusOneButton = $('<button>');
		$plusOneButton.html('+1');
		$plusOneButton.attr('id', 'add-one');

		$newCounterDiv.append($plusOneButton);



		// add button to remove the counter
		var $removeButton = $('<button>');
			$removeButton.html('Remove Counter');
			$removeButton.attr('id', 'remove-counter');
			$newCounterDiv.append($removeButton);

			$newCounterDiv.on('click', function (event) {
				if(event.target.id === 'remove-counter') {
					$(event.currentTarget).remove();
				} else if (event.target.id === 'add-one') {
					// add one to the counter

					// get the index of the current counter
					counterIndex = $(event.target).data('counterIndex')
					// increment that counter from the array of counters
					CounterCollection.addOneToCounterValue
				}
			})

		// the div should be appended to '#counter-container'
		$counterContainer.append($newCounterDiv);
	};


	{ /*<div class="counter" data-counter-index="0">
		<h1 id="counter-name">Errors</h1>
	    <span id="current-count">0</span>
	    <button id="add-one">+1</button>
	  </div>*/}

	//find the button
	var $button = $('#add-one');
	// add an event listener to the button
	$button.on('click', function() {

	// then, inside the listener callback:

		//find the span to get the current value
		var currentValue = $('#current-count').text();
		var currentValueAsInt = parseInt(currentValue);

		// add one to the current span
		currentValueAsInt += 1;
		// change the span to the new value
		$('#current-count').html(currentValueAsInt);

	});

	// Find the form submit button
	var $submitButton = $('#add-new-counter');
	// Add an event listener to the button
	$submitButton.on('click', function (event) {
		//Inside of the event listener:

		// Stop the page from refreshing
		event.preventDefault();
		// Find the value of the new counter name
		var newCounterName = $('#new-counter-name').val();
		// Find the value of the new counter start value
		var newCounterStartValue = $('#new-counter-start-value').val();
		// Alert both
		alert('New Counter Name: ' + newCounterName + " " + newCounterStartValue);
	});
})
=======
// 1. Use jQuery to fetch all `h1` tags and save them to a variable called $h1

// 2. Grab the HTML element that is both an H1 and has an ID of "second"

// 3. Select the div with an ID of 'myDiv' and change the text to say "jQuery makes JS easy!"

// 4. Append this image to end of the body. http://www.fillmurray.com/200/200

// 5. Change the background color of the page to green.

// 6. Remove the div with and ID of 'myDiv'
>>>>>>> 9e9589d33409fd27c132d2918ac65633efb47073
