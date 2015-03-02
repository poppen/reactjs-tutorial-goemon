var Comment = React.createClass({
	render: function() {
		return (
				<div className="comment">
					<h2 className="contentAuthor">
						{this.props.author}
					</h2>
					{this.props.children}
				</div>
			   );
	}
});

var CommentList = React.createClass({
	render: function() {
		return (
				<div className="CommentList">
					<Comment author="Pete Hunt">This is one comment</Comment>
					<Comment author="Jordan Walke">This is *another* comment</Comment>
				</div>
			   );
	}
});

var CommentForm = React.createClass({
	render: function() {
			return (
				<div className="CommentForm">
				</div>
				);
	}
});

var CommentBox = React.createClass({
	render: function() {
		return (
				<div className="CommentBox">
					<h1>CommentBox</h1>
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
