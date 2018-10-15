import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, postComment } from '../actions';

import Comment from './comment';
import { Field, reduxForm } from 'redux-form';



class PostsShow extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id);	
	}

	renderPost(post) {		
		return(
			<div>
				<h1>{post.title.rendered}  </h1>
				<div dangerouslySetInnerHTML={ {__html: post.content.rendered} } />
			</div>
		)

	}

	renderComments() {
		const comments = this.props.post._embedded.replies;
		
		if(comments) {
			return _.map(comments[0], comment => {
				console.log(comment);
				return (
					<Comment 
						key={comment.id} 
						author={comment.author_name} 
						date={comment.date} 
						avatar={comment.author_avatar_urls[24]}
						content={comment.content.rendered} />
				)
			});
		}
		else {
			return (
				<div className="text-center text-muted">No comments, be the first to comment below</div>
			);
		}
	}

	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-control ${touched && error ? 'is-invalid' : ''}`;

		return(
			<div >
				<label>{field.label}</label>
				<input 
				className={className}
				type="text"
				aria-describedby="validationField"
				{...field.input} //... sätter alla inbyggda handler (onChange osv) till field.inputs version av dessa
				/>
				<small id="validationField" className="invalid-feedback">
                {touched ? error : ''}
                </small>
			</div>
		);
	}

	onSubmit(values) {
		const { id } = this.props.match.params;
		this.props.postComment(values, id, () => {
			this.props.fetchPost(id);
		});
	}

	render() {
		const { post } = this.props;
		const { handleSubmit } = this.props; //Kommer från redux-forms som läggs till props

		if(!post) {
			return <div>Loading...</div>;
		}
		return(
			<div className="wrapper">
				{this.renderPost(post)}
				<hr/>
				<h4 className="text-muted">Comments</h4>
				<div>
					{this.renderComments()}
				</div>
				<br/>
				<h5 className="text-muted">Your thoughts?</h5>				
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
					<div className="row">
						<div className="col-sm">
							<Field 
							label="Your name"
							name="author_name"
							component={this.renderField}
							/>
						</div>
						<div className="col-sm">
							<Field 
							label="Email"
							name="author_email"
							component={this.renderField}
							/>
						</div>
					</div>
					
					<Field 
					label="Comment"
					name="content"
					component={this.renderField}
					/>
						

					<br/>
					<button type="submit" className="btn btn-primary">Comment</button>
					
				</form>
			</div>
			
		);
	}
}

function validate(values) {
    const errors = {};
    
    //Validate the inputs from 'values'
    if(!values.author_name) {
        errors.author_name = "Enter your name"
    }
    if(!values.author_email) {
        errors.author_email = "Enter your email"
    }
    
    
    if(!values.content) {
        errors.content = "Enter some content"
    }
    

    //If errors is empty, the form is fine to submit
    //If errors has any properties, redux form assumes form is invalid
    return errors;
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default reduxForm({
	validate,
	form: 'PostCommentForm'
})(
connect(mapStateToProps, { fetchPost, postComment })(PostsShow)
);