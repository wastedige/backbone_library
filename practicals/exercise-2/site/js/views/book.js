var app = app || {};

app.BookView = Backbone.View.extend({

    tagName: 'div',
	className: 'bookContainer',
	template: $( '#bookTemplate' ).html(),
    initialize: function(){
        _.bindAll(this, 'render'); // suggested on Oddy Osmani's book -- but does not seem to be doing anything

        //this.listenTo( this.collection, 'add', this.renderBook );
    },

    //el: $( '#books' ),
    // reassigning 'el' is not necessary after all, as it seems like the entire DOM is accessible as is!

	events: {
		'click .delete': 'deleteBook',
        'click': 'detailBook'
	},

	deleteBook: function() {
		//Delete model
		this.model.destroy();

		//Delete view
		this.remove();
	},

    detailBook: function() {


    },

	render: function() {
		//tmpl is a function that takes a JSON object and returns html
		var tmpl = _.template( this.template );

		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
        //this.$el.html( tmpl( this.model.toJSON() ) );
        $(this.$el).html( tmpl( this.model.toJSON() ) );
        $('#mytitle', '#bookDetail').text("BLAH!");
		return this;
	}
});
