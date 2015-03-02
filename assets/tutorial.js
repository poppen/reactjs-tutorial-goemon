var CommentBox = React.createClass({
	render: function() {
		return (
				<div className="CommentBox">
					Hello, world! I am CommentBox.
				</div>
			   );
	}
});

React.render(
		<CommentBox />,
		document.getElementById('content')
		);
