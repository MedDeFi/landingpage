import PatientPath from '@/components/Patient/PatientPath';
import PatientForm from '@/components/Patient/PatientForm';
import React from 'react';



export default function PatientsPage() {
  return (
    <div>
      <PatientPath />
      <PatientForm />
    </div>
  );
}