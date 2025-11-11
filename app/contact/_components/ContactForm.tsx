"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      setSubmitStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Veuillez entrer une adresse email valide.");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi du message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 text-center">
        <h2 className="text-white text-6xl font-bold mb-4">
          Parlons de votre idée.
        </h2>
        <p className="text-gray-300 text-2xl">
          Un projet, une question ou une collaboration ? L&apos;équipe
          <br />
          NightByte est là pour vous accompagner.
        </p>
      </div>
      <div className="w-full p-12 grid grid-cols-1 lg:grid-cols-2 gap-30">
        <div className="h-full">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 h-full flex flex-col"
          >
            <p className="text-gray-400 text-sm">* Champs obligatoires</p>
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Nom et Prénom *"
                value={formData.name}
                onChange={handleInputChange}
                className="rounded-3xl h-14"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Numéro de téléphone"
                value={formData.phone}
                onChange={handleInputChange}
                className="rounded-3xl h-14"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Adresse e-mail *"
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-3xl h-14"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex-1">
              <Textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="rounded-3xl h-full min-h-[120px]"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-xl">
                <CheckCircle className="w-5 h-5" />
                <span>
                  Message envoyé avec succès! Nous vous répondrons sous 24h.
                </span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-xl">
                <AlertCircle className="w-5 h-5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="border border-white text-white rounded-full cursor-pointer text-xl h-12 w-full md:w-40 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: isSubmitting
                  ? "linear-gradient(90.99deg, #4171F9 0.48%, #264393 99.52%)"
                  : "linear-gradient(90.99deg, #4171F9 0.48%, #264393 99.52%)",
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi...
                </>
              ) : (
                <>
                  Envoyer <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="space-y-24 h-full flex flex-col justify-between">
          {/* Direct Contact */}
          <div>
            <h3 className="text-white text-5xl font-semibold mb-6">
              Contact direct
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400 w-5 h-5" />
                <span className="text-gray-300">contact@nightbyte.space</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400 w-5 h-5" />
                <span className="text-gray-300">+213 773 14 17 61</span>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Nous répondons sous 24h.
              </p>
            </div>
          </div>

          {/* Collaboration */}
          <div>
            <h3 className="text-white text-5xl font-semibold mb-6">
              Collaborons, où que vous soyez
            </h3>
            <p className="text-gray-300">
              Nous travaillons en remote avec des startups, entreprises
              <br />
              et créateurs partout dans le monde.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-6">
              Restons connectés
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
