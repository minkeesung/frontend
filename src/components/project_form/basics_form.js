import React, { Component } from 'react'
import '../../css/basics_form.scss'
import '../../css/project_form.scss'

class BasicsForm extends Component {
  render() {
    if (this.props.formType === "basics") {
      return (
        <section className="basics-form-container">
          <div className="basics-form-copy">
            <h1>Let's get started.</h1>
            <p>Make a great first impression with your project’s title and
              image, and set your funding goal, campaign duration, and
            project category.</p>
          </div>
          <form onSubmit={this.props.handleSubmit}>
            {this.props.renderErrors()}
            <div className="project-basics-field">
              <label className="project-basics-label">Project image</label>
              <div className="project-form-image-field">
                <input
                  alt="Image preview"
                  maxLength="60"
                  type="file"
                  id="project_photo"
                  value=""
                  onChange={this.props.updateFile}
                />
                <img src={this.props.state.imageUrl} alt=""/>
              </div>
            </div>
            <div className="project-basics-field">
              <label className="project-basics-label">Project title</label>
              <input
                type="text"
                value={this.props.state.title}
                onChange={this.props.updateBasics('title')}
              />
            </div>
            <div className="project-basics-field">
              <label className="project-basics-label">Project description</label>
              <input
                type="textarea"
                value={this.props.state.description}
                onChange={this.props.updateBasics('description')}
              />
            </div>
            <div className="project-basics-field">
              <label className="project-basics-label">Category</label>
              <select
                value={this.props.state.category_id}
                onChange={this.props.updateBasics('category_id')}>
                <option disabled={true}>Select a category</option>
                {this.props.categories.map(category => {
                  return <option value={category.id} key={category.id}>{category.name}</option>;
                  })}
              </select>
            </div>
            <div className="project-basics-field">
              <label className="project-basics-label">Project details</label>
              <textarea
                type="textarea"
                value={this.props.state.details}
                onChange={this.props.updateBasics('details')}
                />
            </div>
            <div className="project-basics-field">
              <label className="project-basics-label">End on date</label>
              <input
                type="date"
                value={this.props.state.end_date}
                onChange={this.props.updateBasics('end_date')}
                />
            </div>
            <div className="project-basics-field">
              <label className="project-basics-label">Funding goal</label>
              <input
                type="number"
                value={this.props.state.funding_goal}
                placeholder="$0"
                onChange={this.props.updateBasics('funding_goal')}
                />
            </div>
            <button onClick={this.props.handleSubmit} className="save-project-button">Save project</button>
          </form>
        </section>
      );
    } else {
      return <p></p>;
    }
  }
}

export default BasicsForm;
