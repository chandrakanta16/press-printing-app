import React,{useEffect, useState,} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {

  const navigate =
    useNavigate();

  const [contacts, setContacts] =
    useState([]);

  const [selectedIds, setSelectedIds] =
    useState([]);

  const [selectMode, setSelectMode] =
    useState(false);

  useEffect(() => {

    fetchContacts();

  }, []);

  const fetchContacts =
  async () => {

    try {

      const res =
        await axios.get(
          // "http://localhost:5000/api/contact"
        // "http://192.168.1.7:5000/api/contact"
        `${import.meta.env.VITE_API_URL}/api/contact`
        );

      setContacts(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  const handleSelect =
  (id) => {

    if (
      selectedIds.includes(id)
    ) {

      setSelectedIds(
        selectedIds.filter(
          (item) => item !== id
        )
      );

    } else {

      setSelectedIds([
        ...selectedIds,
        id,
      ]);

    }

  };

  const handleDelete =
  async (id = null) => {

    try {

      const idsToDelete =
        id ? [id] : selectedIds;

      await axios.delete(
        

        `${import.meta.env.VITE_API_URL}/api/contact/delete`,

        {
          data: {
            ids: idsToDelete,
          },
        }
      );

      fetchContacts();

      setSelectedIds([]);

      setSelectMode(false);

    } catch (error) {

      console.log(error);

    }
  };

  const handleLogout =
  () => {

    localStorage.removeItem(
      "adminAuth"
    );

    navigate("/login");

  };

  return (

    <div className="adminDash2_wrapper">

      {/* HEADER */}

      <div className="adminDash2_header">

        <h1>
          Customer Messages
        </h1>

        <div className="adminDash2_actions">

          <button
            className="adminDash2_selectBtn"
            onClick={() =>
              setSelectMode(
                !selectMode
              )
            }
          >
            {
              selectMode
              ? "Cancel Select"
              : "Select Multiple"
            }
          </button>

          {selectedIds.length > 0 && (

            <button
              className="adminDash2_multiDelete"
              onClick={() =>
                handleDelete()
              }
            >
              Delete Selected
            </button>

          )}

          <button
            className="adminDash2_logoutBtn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

      {/* CONTACT LIST */}

      <div className="adminDash2_list">

        {contacts.map((item) => (

          <div
            className="adminDash2_card"
            key={item._id}
          >

            {/* TOP */}

            <div className="adminDash2_top">

              <h2>{item.name}</h2>

              {selectMode && (

                <input
                  type="checkbox"
                  checked={selectedIds.includes(item._id)}
                  onChange={() =>
                    handleSelect(item._id)
                  }
                />

              )}

            </div>

            {/* CONTACT */}

            <div className="adminDash2_info">

              <p>
                <strong>Phone:</strong>
                {item.phone}
              </p>

              <p>
                <strong>Email:</strong>
                {item.email}
              </p>

              <p>
                <strong>Message:</strong>
                {item.message}
              </p>

            </div>

            {/* ACTIONS */}

            <div className="adminDash2_btnGroup">

              <a
                href={`tel:${item.phone}`}
                className="adminDash2_callBtn"
              >
                Call
              </a>

              <a
                href={`https://wa.me/${item.phone}`}
                target="_blank"
                className="adminDash2_whatsappBtn"
              >
                WhatsApp
              </a>

              <a
                href={`mailto:${item.email}`}
                className="adminDash2_mailBtn"
              >
                Mail
              </a>

            </div>

            {/* DELETE */}

            <button
              className="adminDash2_deleteBtn"
              onClick={() =>
                handleDelete(item._id)
              }
            >
              Delete Message
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}