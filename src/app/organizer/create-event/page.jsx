"use client";
import React, { useState } from "react";
import CreateEventComponent from "./_component/CreateEventComponent";
import CreateAgendaComponent from "./_component/CreateAgendaComponent";

function CreateEcoEventPage() {
  const [currentComponent, setCurrentComponent] = useState(2);
  const [formData, setFormData] = useState({});
  const goToNext = () => {
    setCurrentComponent(2);
  };

  const goToPrevious = () => {
    setCurrentComponent(1);
  };

  return (
    <>
      {currentComponent === 1 && (
        <CreateEventComponent
          onNext={goToNext}
          formData={formData}
          setFormData={setFormData}
          className="w-full"
        />
      )}
      {currentComponent === 2 && (
        <CreateAgendaComponent
          onBack={goToPrevious}
          setFormData={setFormData}
          formData={formData}
        />
      )}
    </>
  );
}

export default CreateEcoEventPage;
