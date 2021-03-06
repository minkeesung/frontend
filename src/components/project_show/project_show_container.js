import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectShow from './project_show';
import { fetchProject, deleteProject } from '../../actions/project_actions';
import { createPledge } from '../../actions/pledge_actions';

const mapStateToProps = (state, ownProps) => {
  const project = state.projects[ownProps.match.params.id];
  const user = state.session.currentUser;
  let rewards = [];

  if (project && project.reward_ids) {
    rewards = project.reward_ids.map(rewardId => state.rewards[rewardId]);
  }
  return { project, rewards, user };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    createPledge: pledge => dispatch(createPledge(pledge)),
    deleteProject: id => dispatch(deleteProject(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow));
