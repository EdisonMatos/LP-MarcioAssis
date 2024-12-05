/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";
import { CiUser, CiPhone, CiMail, CiGlobe, CiChat1 } from "react-icons/ci";
import content from "../../content/content";
import emailjs from "@emailjs/browser";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [uf, setUf] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
    setName(capitalizeFirstLetter(onlyLetters));
  };

  const handleUfChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
    setUf(capitalizeFirstLetter(onlyLetters));
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/[^\d()-\s]/g, "");
    let formattedPhone = formatPhoneNumber(input);
    if (formattedPhone.length <= 15) {
      setPhone(formattedPhone);
    }
  };

  const sendToWhatsapp = async () => {
    const validationErrors = {};

    if (!validateName(name)) {
      validationErrors.name = "O campo nome é obrigatório.";
    }

    if (!validatePhone(phone)) {
      validationErrors.phone = "O campo telefone é obrigatório.";
    }

    if (!email) {
      validationErrors.email = "O campo email é obrigatório.";
    } else if (!validateEmail(email)) {
      validationErrors.email =
        "O formato do email digitado é inválido. Verifique.";
    }
    if (!validateUf(uf)) {
      validationErrors.uf = "O campo UF é obrigatório..";
    }

    if (!validateMessage(message)) {
      validationErrors.message = "O campo mensagem é obrigatório.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Definir os parâmetros para o envio do email
    const templateParams = {
      to_name: name,
      name: name,
      phone: phone,
      email: email,
      uf: uf,
      to_email: email, // Agora o email do usuário
      message: message,
    };

    try {
      // Enviar o e-mail usando o EmailJS
      const response = await emailjs.send(
        "service_79yzhx9", // ID do seu serviço
        "template_mhpelei", // ID do seu template
        templateParams,
        "HhY_ngFZdJ35Ugc0H" // Sua chave pública
      );
      console.log(
        "Mensagem enviada com sucesso:",
        response.status,
        response.text
      );
      // Limpar os campos
      setName("");
      setPhone("");
      setEmail("");
      setUf("");
      setMessage("");

      alert("E-mail enviado com sucesso! Recebemos seu cadastro.");
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      alert("Houve um erro ao enviar o e-mail. Tente novamente.");
      return;
    }

    const numeroWhatsapp = `${content.texts.links.ctaWhatsapp}`;
    const mensagemWhatsapp = `Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nMensagem: ${message}`;
    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensagemWhatsapp
    )}`;

    window.open(linkWhatsapp, "_blank");
  };

  const validateName = (name) => {
    const namePattern = /^[a-zA-ZÀ-ÿ\s]+$/; // Permite apenas letras e espaços
    return namePattern.test(name.trim());
  };

  const validatePhone = (phone) => {
    const phoneNumberPattern = /^[\d()-\s]+$/;
    const cleanedPhone = phone.replace(/[^\d]/g, "");
    return phoneNumberPattern.test(phone) && cleanedPhone.length === 11;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email.trim());
  };

  const validateMessage = (message) => !!message;

  const validateUf = (uf) => {
    return uf.trim().length >= 5; // Certifique-se de que a UF tem pelo menos 2 caracteres
  };

  const formatPhoneNumber = (phoneNumber) => {
    let cleaned = phoneNumber.replace(/\D/g, "");
    return cleaned.replace(
      /^(\d{2})(\d{1,5})?(\d{1,4})?/,
      (match, p1, p2, p3) => {
        let part1 = p1 ? `(${p1}` : "";
        let part2 = p2 ? `) ${p2}` : "";
        let part3 = p3 ? `-${p3}` : "";
        return `${part1}${part2}${part3}`;
      }
    );
  };

  return (
    <div>
      <div className="text-paragraph3 phone3:text-paragraph4 w-full">
        <h1 className="w-full mb-2 font-medium">Entre em contato agora</h1>

        <div className="mb-5">
          <div className="flex mb-4 text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiUser />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none rounded-tr-none-md rounded-br-none-md"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Nome"
              required
            />
          </div>
          {errors.name && (
            <p className="-mt-2 -mb-1 text-red-500 text-paragraph3">
              {errors.name}
            </p>
          )}
        </div>

        <div className="mb-5">
          <div className="flex mb-4 text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiPhone />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none rounded-tr-none-md rounded-br-none-md"
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Telefone"
              required
            />
          </div>
          {errors.phone && (
            <p className="-mt-2 -mb-1 text-red-500 text-paragraph3">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="mb-5">
          <div className="flex mb-4 text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiMail />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none rounded-tr-none-md rounded-br-none-md"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
          </div>
          {errors.email && (
            <p className="-mt-2 -mb-1 text-red-500 text-paragraph3">
              {errors.email}
            </p>
          )}
        </div>

        <div className="mb-5">
          <div className="flex mb-4 text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiGlobe />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none rounded-tr-none-md rounded-br-none-md"
              type="text"
              id="uf"
              value={uf}
              onChange={handleUfChange} // Alterado para usar a função handleUfChange
              placeholder="Cidade e Estado"
              minLength={5}
              required
            />
          </div>
          {errors.uf && (
            <p className="-mt-2 -mb-1 text-red-500 text-paragraph3">
              {errors.uf}
            </p>
          )}
        </div>

        <div className="mb-5">
          <div className="flex mb-4 text-gray-500">
            <div className="flex justify-center w-12 px-1 bg-white">
              <CiChat1 className="h-11" />
            </div>
            <textarea
              className="w-full px-1 py-2 border-0 rounded-none rounded-tr-none-md rounded-br-none-md"
              type="text"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Conte-nos sua demanda"
              required
            />
          </div>
          {errors.message && (
            <p className="-mt-2 -mb-1 text-red-500 text-paragraph3">
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            className="flex items-center w-full px-4 py-2 font-medium text-white bg-[#075E54] rounded-lg text-title1 h-14 phone2:h-14 phone3:h18 hover:bg-secondary hover:text-white transition"
            onClick={sendToWhatsapp}
          >
            <div className="flex items-center justify-center w-full">
              <img
                src={WhatsAppIcon}
                className="w-10 h-10 mr-2"
                alt="WhatsApp Icon"
              />
              <p className="whitespace-nowrap text-paragraph4 phone1:text-paragraph5 phone2:text-title2 tablet1:text-title1 px-[3%]">
                Enviar mensagem
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsappForm;
