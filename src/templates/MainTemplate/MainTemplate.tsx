import React, { useCallback, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.tsx';
import NotificationModal from '../../containers/NotificationModal/NotificationModal.tsx';

interface Props {
  children: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = useCallback(()=> setModalOpen(!modalOpen),[modalOpen]);

    return (
      <div className="flex flex-col min-h-screen">
        <Navbar notificationsButtonClick={toggleModal}/>
        <main className="flex-grow p-4 bg-gray-100">{children}</main>
        <NotificationModal visible={modalOpen} onClose={toggleModal}/>
      </div>
  );
};

export default MainTemplate;