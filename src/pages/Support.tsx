
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

// Sample message data
const initialMessages = [
  {
    id: 1,
    sender: "system",
    message: "Welcome to HomePrep Wizard support! How can we help you today?",
    time: new Date(Date.now() - 60000 * 2).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

const supportAgents = [
  {
    id: 1,
    name: "Alex Johnson",
    department: "Customer Support",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    status: "online"
  },
  {
    id: 2,
    name: "Jessica Williams",
    department: "Interior Design",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "online"
  },
  {
    id: 3,
    name: "Michael Thompson",
    department: "Delivery Operations",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    status: "away"
  }
];

const faqItems = [
  {
    question: "How long does delivery typically take?",
    answer: "For packages, standard delivery takes 3-5 business days. Custom orders may take 1-2 weeks depending on the items selected."
  },
  {
    question: "Can I modify my package after placing an order?",
    answer: "Yes, you can modify your package within 24 hours of placing your order. After that, please contact customer support for assistance with changes."
  },
  {
    question: "What is the return policy?",
    answer: "We offer a 30-day return policy for most items. Custom or personalized items may have different return terms. Please check the product details for specific return information."
  },
  {
    question: "How do I schedule an interior consultation?",
    answer: "You can schedule a consultation through our website by visiting the Consultation page and filling out the form. One of our designers will contact you within 24-48 hours."
  },
  {
    question: "Do you offer installation services?",
    answer: "Yes, we offer professional installation services for all furniture and electronics. Installation costs vary depending on the items and complexity."
  }
];

const Support: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<typeof supportAgents[0] | null>(null);
  const [supportQuery, setSupportQuery] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSupportQuery(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage("");
    
    // Simulate agent typing
    setIsTyping(true);
    
    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      
      let responseMessage;
      if (newMessage.toLowerCase().includes("delivery")) {
        responseMessage = "Our standard delivery time is 3-5 business days. For custom orders, it may take 1-2 weeks depending on the items.";
      } else if (newMessage.toLowerCase().includes("return") || newMessage.toLowerCase().includes("refund")) {
        responseMessage = "We have a 30-day return policy for most items. For specific return information, please provide your order number and the items you want to return.";
      } else if (newMessage.toLowerCase().includes("payment") || newMessage.toLowerCase().includes("pay")) {
        responseMessage = "We accept all major credit cards, PayPal, and offer financing options through Affirm. Would you like more details about any specific payment method?";
      } else {
        responseMessage = "Thank you for your message. I'll help you with that. Could you provide more details so I can better assist you?";
      }
      
      const agentMessage = {
        id: messages.length + 2,
        sender: "agent",
        message: responseMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prevMessages => [...prevMessages, agentMessage]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleConnectAgent = () => {
    if (!supportQuery.name || !supportQuery.email || !supportQuery.message) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields before connecting.",
        variant: "destructive"
      });
      return;
    }
    
    setConnecting(true);
    
    // Simulate connecting to an agent
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
      setSelectedAgent(supportAgents[0]);
      
      const systemMessage = {
        id: messages.length + 1,
        sender: "system",
        message: `You've been connected with ${supportAgents[0].name} from ${supportAgents[0].department}.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      const agentMessage = {
        id: messages.length + 2,
        sender: "agent",
        message: `Hi ${supportQuery.name}, I'm ${supportAgents[0].name}. I understand you have a question about "${supportQuery.subject}". How can I help you today?`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...initialMessages, systemMessage, agentMessage]);
    }, 3000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Customer Support</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get help with your orders, packages, or consultations.
            Our team is ready to assist you.
          </p>
        </div>
        
        <Tabs defaultValue="chat" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="chat">Live Chat</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Form</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="mt-6">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Customer Support Chat</CardTitle>
                    <CardDescription>
                      {connected 
                        ? `Speaking with ${selectedAgent?.name} from ${selectedAgent?.department}` 
                        : "Connect with a support agent"}
                    </CardDescription>
                  </div>
                  {connected && selectedAgent && (
                    <div className="flex items-center">
                      <img 
                        src={selectedAgent.image} 
                        alt={selectedAgent.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium text-sm">{selectedAgent.name}</p>
                        <p className="text-xs text-gray-500">{selectedAgent.department}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
                {!connected ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      {connecting ? (
                        <div className="space-y-4">
                          <div className="w-16 h-16 border-4 border-t-teal rounded-full animate-spin mx-auto"></div>
                          <p className="text-gray-500">Connecting you with an available agent...</p>
                        </div>
                      ) : (
                        <div className="space-y-6 max-w-md">
                          <h3 className="text-xl font-semibold">Start a Support Conversation</h3>
                          <div className="space-y-4">
                            <div>
                              <Input 
                                placeholder="Your Name" 
                                name="name"
                                value={supportQuery.name}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <Input 
                                placeholder="Email Address" 
                                type="email"
                                name="email"
                                value={supportQuery.email}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <Input 
                                placeholder="Subject" 
                                name="subject"
                                value={supportQuery.subject}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <Textarea 
                                placeholder="How can we help you today?" 
                                className="h-32"
                                name="message"
                                value={supportQuery.message}
                                onChange={handleInputChange}
                              />
                            </div>
                            <Button 
                              className="w-full bg-teal hover:bg-teal-dark text-white"
                              onClick={handleConnectAgent}
                            >
                              Connect with Agent
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div 
                      key={msg.id}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.sender === "agent" && selectedAgent && (
                        <img 
                          src={selectedAgent.image} 
                          alt={selectedAgent.name}
                          className="w-8 h-8 rounded-full mr-2 flex-shrink-0"
                        />
                      )}
                      
                      <div
                        className={`max-w-[75%] p-3 rounded-lg ${
                          msg.sender === "user"
                            ? "bg-teal text-white"
                            : msg.sender === "system"
                            ? "bg-gray-100 text-gray-600"
                            : "bg-gray-200"
                        }`}
                      >
                        <p>{msg.message}</p>
                        <p className="text-xs text-right mt-1 opacity-70">{msg.time}</p>
                      </div>
                      
                      {msg.sender === "user" && (
                        <div className="w-8 h-8 rounded-full bg-teal-dark flex items-center justify-center text-white ml-2">
                          <span className="text-sm font-semibold">
                            {supportQuery.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                  ))
                )}
                
                {isTyping && (
                  <div className="flex items-center">
                    <img 
                      src={selectedAgent?.image} 
                      alt={selectedAgent?.name || "Agent"}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              
              {connected && (
                <div className="border-t p-4">
                  <div className="flex items-center">
                    <Input 
                      placeholder="Type your message..." 
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      className="flex-grow"
                    />
                    <Button 
                      className="ml-2 bg-teal hover:bg-teal-dark text-white"
                      onClick={handleSendMessage}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </TabsContent>
          
          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Find quick answers to common questions about our services and packages.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Send us a message and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this regarding?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <div>
                    <Button 
                      className="bg-teal hover:bg-teal-dark text-white"
                      onClick={() => {
                        toast({
                          title: "Message Sent",
                          description: "We've received your message and will respond within 24 hours.",
                          duration: 5000
                        });
                      }}
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Support;
