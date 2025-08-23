import { availableFonts } from '../utils/fonts';

export const commands = {
  help: "Available commands: [help, fonts, font <fontname>, about, stars, clear, loading, hi, love, journey, legacy, impact, mentor, quote, thankyou, leader, recommend, epilogue, thanks, sorry, tmi, farewell]",
  fonts: `Available fonts: [${availableFonts.join(', ')}]`,
  about: "This is a fake CLI running inside your browser 🌌",
  stars: "✨✨✨ Look at the galaxy shine ✨✨✨",
  hi: "🙏 Thank you for being here. Your presence is appreciated!",
  journey: "__JOURNEY__",
  clear: "__CLEAR__",
  loading: "__LOADING__",
  legacy: "__LEGACY__",
  impact: "__IMPACT__",
  mentor: "__MENTOR__",
  quote: "__QUOTE__",
  thankyou: "__THANKYOU__",
  leader: "__LEADER__",
  recommend: "__RECOMMEND__",
  epilogue: "__EPILOGUE__",
  thanks: "__THANKS__",
  sorry: "__SORRY__",
  tmi: "__TMI__",
  farewell: "__FAREWELL__",
};
