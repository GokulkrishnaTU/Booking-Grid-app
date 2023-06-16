import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(6, 1fr);
  grid-gap: 10px;
  background-color: white;
`;

const Slot = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  background-color: #a29d9d;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

img{
  height: 50px;
  width: 50px;
  border-radius: 50px;
}

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #a29d9d;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  width: 350px;

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
  }
`;


const App = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [popupData, setPopupData] = useState({
    startTime: '',
    endTime: '',
    patientName: '',
    doctorName: '',
  });

  const handleClosePopup = () => {
    setSelectedSlot(null);
  };
  const [appointments, setAppointments] = useState({
    'Doctor 1': {},
    'Doctor 2': {},
    'Doctor 3': {},
    'Doctor 4': {},
    'Doctor 5': {},
    'Doctor 6': {},
  });
  
  useEffect(() => {
    console.log(appointments);
  }, [appointments]);

  const handleSlotClick = (doctorName, startTime) => {
    setSelectedSlot({ doctorName, startTime });
    setPopupData((prevState) => ({
      ...prevState,
      doctorName: doctorName,
    }));
  };

  const handlePopupChange = (e) => {
    const { name, value } = e.target;
    setPopupData((prevState) => ({
      ...prevState,
      [name]: value,
      doctorName: selectedSlot.doctorName,
    }));
  };

  const handleSubmit = () => {
    if (
      popupData.startTime &&
      popupData.endTime &&
      popupData.patientName &&
      popupData.doctorName
    ) {
      setAppointments((prevState) => {
        const updatedAppointments = {
          ...prevState,
          [popupData.doctorName]: {
            ...(prevState[popupData.doctorName] || {}),
            [popupData.startTime]: {
              startTime: popupData.startTime,
              endTime: popupData.endTime,
              patientName: popupData.patientName,
            },
          },
        };
        return updatedAppointments;

      });
      console.log(appointments ,"heyyyy"); // Add this line to log the appointments data

      setPopupData({
        startTime: '',
        endTime: '',
        patientName: '',
        doctorName: '',
      });
      setSelectedSlot(null);
    }
  };

  return (
    <Container>
      <Slot>
      <strong>Time</strong>

     
      </Slot>
      <Slot>
      <Wrapper>
      <strong>Doctor 1</strong>

<img src="/assets/doctor.jpg" alt="dr" />
</Wrapper>
      </Slot>
      <Slot>
      <Wrapper>
      <strong>Doctor 2</strong>

<img src="/assets/doctor.jpg" alt="dr" />
</Wrapper>      </Slot>
      <Slot>
      <Wrapper>
      <strong>Doctor 3</strong>

<img src="/assets/doctor.jpg" alt="dr" />
</Wrapper>      </Slot>
      <Slot>
      <Wrapper>
      <strong>Doctor 4</strong>

<img src="/assets/doctor.jpg" alt="dr" />
</Wrapper>      </Slot>
      <Slot>
      <Wrapper>
      <strong>Doctor 5</strong>

<img src="/assets/doctor.jpg" alt="dr" />
</Wrapper>      </Slot>
      <Slot>
      <Wrapper>
      <strong>Doctor 6</strong>

<img src="/assets/doctor.jpg" alt="dr" />
</Wrapper>      </Slot>

      {Array.from({ length: 8 }).map((_, index) => {
        const startTime = index + 9;

        const endTime = index + 10;
        return (
          <>
            <Slot>
              <strong>{`${startTime} - ${endTime}`}</strong>
            </Slot>
            








































            <Slot onClick={() => handleSlotClick('Doctor 1', startTime)}>
              {appointments['Doctor 1'] &&
                appointments['Doctor 1'][startTime] && (
                  <div>
                    <span>
                      Your slot has been Booked from : 
                      {appointments['Doctor 1'][startTime].startTime} -{' '}
                      {appointments['Doctor 1'][startTime].endTime }
                    </span>
                    <br />
                    <span>
                      
                    {appointments['Doctor 1'][startTime].doctorName}
pattient Name :
                      {appointments['Doctor 1'][startTime].patientName}
                    </span>
                  </div>
                )}
            </Slot>
            <Slot onClick={() => handleSlotClick('Doctor 2', startTime)}>
              {appointments['Doctor 2'] &&
                appointments['Doctor 2'][startTime] && (
                  <div>
                    <span>
                    Your slot has been Booked from : 

                      {appointments['Doctor 2'][startTime].startTime} -{' '}
                      {appointments['Doctor 2'][startTime].endTime}
                    </span>
                    <br />
                    <span>
                    pattient Name :

                      {appointments['Doctor 2'][startTime].patientName}
                    </span>
                  </div>
                )}
            </Slot>
            <Slot onClick={() => handleSlotClick('Doctor 3', startTime)}>
              {appointments['Doctor 3'] &&
                appointments['Doctor 3'][startTime] && (
                  <div>
                    <span>
                    Your slot has been Booked from : 

                      {appointments['Doctor 3'][startTime].startTime} -{' '}
                      {appointments['Doctor 3'][startTime].endTime}
                    </span>
                    <br />
                    <span>
                    pattient Name :

                      {appointments['Doctor 3'][startTime].patientName}
                    </span>
                  </div>
                )}
            </Slot>
            <Slot onClick={() => handleSlotClick('Doctor 4', startTime)}>
              {appointments['Doctor 4'] &&
                appointments['Doctor 4'][startTime] && (
                  <div>
                    <span>
                    Your slot has been Booked from : 

                      {appointments['Doctor 4'][startTime].startTime} -{' '}
                      {appointments['Doctor 4'][startTime].endTime}
                    </span>
                    <br />
                    <span>
                    pattient Name :

                      {appointments['Doctor 4'][startTime].patientName}
                    </span>
                  </div>
                )}
            </Slot>
            <Slot onClick={() => handleSlotClick('Doctor 5', startTime)}>
              {appointments['Doctor 5'] &&
                appointments['Doctor 5'][startTime] && (
                  <div>
                    <span>
                    Your slot has been Booked from : 

                      {appointments['Doctor 5'][startTime].startTime} -{' '}
                      {appointments['Doctor 5'][startTime].endTime}
                    </span>
                    <br />
                    <span>
                    pattient Name :

                      {appointments['Doctor 5'][startTime].patientName}
                    </span>
                  </div>
                )}
            </Slot>
            <Slot onClick={() => handleSlotClick('Doctor 6', startTime)}>
              {appointments['Doctor 6'] &&
                appointments['Doctor 6'][startTime] && (
                  <div>
                    <span>
                                            Your slot has been Booked from : 

                      {appointments['Doctor 6'][startTime].startTime} -{' '}
                      {appointments['Doctor 6'][startTime].endTime}
                    </span>
                    <br />
                    <span>
                      {appointments['Doctor 6'][startTime].patientName}
                    </span>
                  </div>
                )}
            </Slot>
          </>
        );
      })}

      {selectedSlot && (
        <Popup>
             <span className="close-button" onClick={handleClosePopup}>
            X
          </span>
          <h3>Appointment Details</h3>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="startTime">Start Time:</Label>
            <Input
              type="text"
              id="startTime"
              name="startTime"
              value={popupData.startTime}
              onChange={handlePopupChange}
            />
            <Label htmlFor="endTime">End Time:</Label>
            <Input
              type="text"
              id="endTime"
              name="endTime"
              value={popupData.endTime}
              onChange={handlePopupChange}
            />
            <Label htmlFor="patientName">Patient Name:</Label>
            <Input
              type="text"
              id="patientName"
              name="patientName"
              value={popupData.patientName}
              onChange={handlePopupChange}
            />
            <Label htmlFor="doctorName">Doctor:</Label>
            <Input
              type="text"
              id="doctorName"
              name="doctorName"
              value={popupData.doctorName}
              onChange={handlePopupChange}
              disabled
            />
          </Form>
          <Button onClick={handleSubmit}>Submit</Button>
        </Popup>
      )}
    </Container>
  );
};

export default App;
