import api from '../../'
import { getAuthConfig } from '../../';

const baseURL = '/gradereview';
const baseURLComment = '/gradecomment';

/// Grade review ----------------------------------------------------------

export const listReview = async (classId, page) => {
  const params = {
    class_id: classId,
    page: page,
  }
  const config = {
    ...getAuthConfig(),
    params: params
  };

  return api.get(`${baseURL}`, config);
}

export const postReviewRequest = async (input) => {
  const config = getAuthConfig();
  const dataInput = {
    ...input
  }
  
  return api.post(`${baseURL}`, dataInput, config);
}

export const updateReview = async (reviewId, input) => {
  const config = getAuthConfig();
  const dataInput = {
    ...input
  }
  
  return api.put(`${baseURL}/${reviewId}`, dataInput, config);
}

/// Grade review comment----------------------------------------------------------

export const listComment = async (reviewId, page = 1) => {
  const config = getAuthConfig();
  const data = {
    review_id: reviewId,
    page: page
  }

  return api.post(`${baseURLComment}`, data, config);
}

export const postComment = async (reviewId, form = {}) => {
  const endpoint = '/new';
  const config = getAuthConfig();
  const data = {
    review_id: reviewId,
    ...form,
  }

  return api.post(`${baseURLComment}${endpoint}`, data, config);
}

export const GradeReviewCommentAPI = {
  postComment,
  listComment,
}

const GradeReviewAPI = {
  postReviewRequest,
  listReview,
  updateReview,
  CommentAPI: GradeReviewCommentAPI,
}

export default GradeReviewAPI;
