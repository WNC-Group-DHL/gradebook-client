import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ClassroomAPI from '../../../helpers/api/classrooms';

import ClassroomContainer from './container';

function ClassroomSinglePage() {
  const { class_id } = useParams();

  const [classroom, setClassroom] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadClassroom(class_id);
  }, [class_id]);

  const loadClassroom = (classId) => {
    setClassroom({});
    setIsLoading(true);
    ClassroomAPI.fetchClassroom(classId)
    .then((result) => {
      // Unauthorized / Not joined class 
      // API does not response with 403
      // but still 200 OK
      if (result.data.success) {
        setClassroom(result.data.data);
      } else {
        throw new Error(result.data.message);
      }
    })
    .catch((error) => {
      let err = {};
      if (error.response) {
        if (error.response.data) {
          err.status = error.response.status;
          err.message = error.response.data.message;
        } else {
          //Incase cannot request to server
          err.message = error.response.message;
        }
      } else {
        err.message = error.message;
      }
      setError(err);
    })
    .finally(() => setIsLoading(false));
  }

  return (
    <ClassroomContainer
      classroom={classroom}
      isLoading={isLoading}
      error={error}
    />
  )
}

export default ClassroomSinglePage
