var app = app || {};
var tmpl;
app.BookView = Backbone.View.extend({

    tagName: 'div',
	className: 'bookContainer',
	template: $( '#bookTemplate' ).html(),
    initialize: function(){
        _.bindAll(this, 'render'); // suggested on Oddy Osmani's book -- but does not seem to be doing anything
    },

    //el: $( '#books' ),
    // reassigning 'el' is not necessary after all, as it seems like the entire DOM is accessible as is!

	events: {
		'click .delete': 'deleteBook',
        'mouseenter': 'mouseEnter',
        'mouseleave': 'mouseExit'
	},

	deleteBook: function() {
		//Delete model
		this.model.destroy();

		//Delete view
		this.remove();
	},

    mouseEnter: function() {
        $('#title', '#bookDetail').text(this.model.get('title'));
        $('#author', '#bookDetail').text(this.model.get('author'));
        $('#keywords', '#bookDetail').text(
            _.map(this.model.get('keywords'), function(data) {
                return data.keyword;
            })
        );
        // $('#bookDetail').html( tmpl( this.model.toJSON() ) );
    },

    mouseExit: function() {
        // I'm sure there's a one-liner way to handle this
        $('#title', '#bookDetail').text("");
        $('#author', '#bookDetail').text("");
        $('#keywords', '#bookDetail').text("");

    },

	render: function() {
		//tmpl is a function that takes a JSON object and returns html
        tmpl = _.template( this.template );

		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( tmpl( this.model.toJSON() ) );
        $('#mytitle', '#bookDetail').text("");
		return this;
	}
});
