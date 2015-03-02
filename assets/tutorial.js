var data = [
	{author: "Pete Hunt", text: "This is one comment"},
	{author: "Jordan Walke", text: "This is *another* comment"}
];

var converter = new Showdown.converter();
var Comment = React.createClass({
	render: function() {
		var rawMarkup = converter.makeHtml(this.props.children.toString());
		return (
				<div className="comment">
					<h2 className="contentAuthor">
						{this.props.author}
					</h2>
					<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
				</div>
			   );
	}
});

var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
					<Comment author={comment.author}>
						{comment.text}
					</Comment>
				   );
		});
		return (
			<div className="CommentList">
				{commentNodes}
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
					<CommentList data={this.props.data} />
					<CommentForm />
				</div>
			   );
	}
});

React.render(
		<CommentBox data={data} />,
		document.getElementById('content')
		);
