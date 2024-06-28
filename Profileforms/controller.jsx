import React from 'react';
import Collapsible from './Collapsible';
import AcademicWorkForm from './AcademicWorkForm';
import FacultyInformationForm from './FacultyInformationForm';
import ResearchAndDevelopment from './ResearchAndDevelopment';

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <Collapsible title="Faculty Information">
        <FacultyInformationForm />
      </Collapsible>
      <Collapsible title="Academic Work">
        <AcademicWorkForm />
      </Collapsible>
      <Collapsible title="Research and Development">
        <ResearchAndDevelopment />
      </Collapsible>
    </div>
  );
};

export default Profile;
