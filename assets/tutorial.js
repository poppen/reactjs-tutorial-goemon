var CommentList = React.createClass({
	render: function() {
		return (
				<div className="CommentList">
					Hello, world! I am CommentList.
				</div>
			   );
	}
});

var CommentForm = React.createClass({
	render: function() {
			return (
				<div className="CommentForm">
					Hello, world! I am a CommentForm
				</div>
				);
	}
});

var CommentBox = React.createClass({
	render: function() {
		return (
				<div className="CommentBox">
					<h1>Hello, world! I am CommentBox.</h1>
					<CommentList />
					<CommentForm />
				</div>
			   );
	}
});

React.render(
		<CommentBox />,
		document.getElementById('content')
		);
