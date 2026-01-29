import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ArtistSite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
          TIAGO DUSTY
        </h1>
        <p className="text-lg text-gray-400 mb-6 max-w-xl">
          Hip Hop / TrapSoul / New Age Xigaza
        </p>
        <div className="flex gap-4">
          <Button className="hover:scale-105 transition">Enter the Xigaza Era</Button>
          <Button variant="outline" className="hover:scale-105 transition">Book Me</Button>
        </div>
      </motion.section>

      {/* Music */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-10"
        >
          Music
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-zinc-900 border-zinc-800 hover:shadow-xl transition">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-400">Spotify Embed</p>
              <div className="h-48 bg-zinc-800 rounded-xl flex items-center justify-center">
                Spotify Player
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 hover:shadow-xl transition">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-400">Apple Music Embed</p>
              <div className="h-48 bg-zinc-800 rounded-xl flex items-center justify-center">
                Apple Music Player
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Videos */}
      <section className="py-24 px-6 bg-zinc-950">
        <h2 className="text-3xl font-semibold mb-10">Videos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((v) => (
            <motion.div
              key={v}
              whileHover={{ scale: 1.05 }}
              className="h-48 bg-zinc-800 rounded-xl flex items-center justify-center"
            >
              YouTube Video
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6">
        <h2 className="text-3xl font-semibold mb-10">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="h-40 bg-zinc-800 rounded-xl"
            />
          ))}
        </div>
      </section>

      {/* Merch */}
      <section className="py-24 px-6 bg-zinc-950">
        <h2 className="text-3xl font-semibold mb-10">Merch</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Hoodie", "T-Shirt", "Cap"].map((item) => (
            <Card key={item} className="bg-zinc-900 border-zinc-800 hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="h-40 bg-zinc-800 rounded-xl mb-4" />
                <h3 className="font-semibold mb-2">{item}</h3>
                <Button className="w-full">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Bookings & Contact</h2>
        <p className="text-gray-400 mb-6">For shows, features, and business inquiries</p>
        <Button className="hover:scale-105 transition">Get In Touch</Button>
      </section>
    </div>
  );
}

