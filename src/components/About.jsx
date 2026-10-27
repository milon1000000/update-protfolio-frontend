import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-gray-50/60 text-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background, skills, and passion
        </p>

        {/* Image + My Journey */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <div className="lg:w-1/2 overflow-hidden flex items-center justify-center">
            <motion.img
              src="/profile2.jpeg"
              alt="Profile"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full max-w-sm h-auto object-cover rounded-2xl shadow-xl border-4 border-white"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="rounded-2xl p-8 bg-white border border-gray-200/90 shadow-lg text-gray-900">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer specializing in building modern, scalable, and responsive web applications. With hands-on expertise in React, Next.js, TypeScript, and Node.js, I bridge the gap between polished user experiences and robust backend architectures.
              </p>
              <p className="text-gray-600 mb-12 leading-relaxed">
                I focus on writing clean, type-safe code, designing efficient databases with PostgreSQL, MongoDB, and Prisma ORM, and boosting performance with Redis caching. Leveraging modern tools like Tailwind CSS and shadcn/ui, I love turning complex ideas into seamless digital solutions.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md cursor-pointer flex flex-col items-start gap-4"
                  >
                    <div className="text-3xl flex gap-3 items-center">
                      <data.icon className="text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>
                    </div>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi veniam illo maiores inventore ab ea quia nesciunt libero exercitationem provident odit velit facilis aspernatur unde dolorum, commodi fugit aut nobis recusandae sed autem quaerat earum! Libero saepe totam ipsam commodi! Similique dolor sed ipsa eligendi repudiandae libero ab molestias, ad at unde eveniet dolore! Nostrum minus obcaecati numquam quod eos amet ab consequuntur non excepturi facere ipsa laudantium voluptate praesentium corrupti tenetur ea fuga tempora nesciunt, velit eligendi qui aliquid laborum ratione ipsam. Ab, officia nulla sint temporibus ea fugiat? Maxime, magnam unde non impedit libero dolore dicta eum necessitatibus deserunt minus possimus culpa est hic dolores, iste veniam perspiciatis! Officiis facere ipsam sunt iusto qui eum reprehenderit voluptatum possimus, cumque praesentium doloremque labore velit distinctio saepe impedit explicabo debitis corporis est rerum sequi, harum doloribus? Saepe modi nemo molestias maxime laboriosam autem, dolor quae sed officiis voluptatem obcaecati, magni consectetur at sapiente doloribus laborum ipsam quibusdam quidem voluptatum sit animi iste corporis soluta a! Dignissimos autem laborum accusamus adipisci sit in! Aperiam culpa doloribus distinctio facere porro ut tenetur harum alias. Temporibus magni eligendi nulla, perferendis harum eos. Laboriosam quod aut adipisci, quaerat ullam eius asperiores ipsam alias expedita harum optio atque enim numquam repellendus, dolore unde soluta debitis consectetur dicta doloremque consequatur aperiam praesentium, nostrum aliquid? Tenetur culpa accusantium enim veritatis nisi voluptates est dolorum obcaecati deserunt. Sint non dolore officia fugit ullam temporibus molestias reprehenderit nemo, labore, doloribus quidem necessitatibus illo consequuntur commodi. Doloribus repudiandae ex quaerat tenetur, magni totam aspernatur non laboriosam, in fugit cupiditate quis dolor voluptatem hic id voluptate voluptatibus dolorem veniam minus nemo quia exercitationem numquam dicta est. Fuga eos, a tempora, expedita, voluptatum perspiciatis ut placeat aspernatur aut odit omnis voluptate reprehenderit! Aperiam at tempore quisquam voluptas doloribus non iure eius. Facilis, perspiciatis doloribus mollitia minima illum at animi cupiditate possimus aut amet aliquam et obcaecati illo necessitatibus hic. Totam eum officia ipsa magnam, laboriosam non atque inventore quae laudantium saepe pariatur dolorum perspiciatis ullam voluptates expedita. Quas odio earum enim hic, nihil ea soluta numquam repellat at eaque vero aut iste aliquam natus optio? Alias, amet repudiandae ex saepe sunt in repellat quam soluta incidunt! Animi mollitia temporibus corporis aliquam itaque aspernatur aliquid dignissimos repellendus, atque voluptatum, reiciendis dolorem? Sunt dolores numquam et, modi placeat unde quos rem necessitatibus aperiam molestiae dicta cum vitae, dolore repudiandae aliquam. Quo porro nostrum officiis ullam totam ipsum esse. Impedit esse atque nihil tempora quo placeat sed assumenda, voluptas quas. Praesentium, sequi repellat ipsam veniam quasi vero vel soluta quo commodi? Vel, quisquam voluptas similique iste nostrum, maiores incidunt natus voluptatibus adipisci asperiores officia reprehenderit culpa deleniti. Fugiat quae ex sint eaque, sed rerum quasi nam, exercitationem similique nostrum aperiam velit explicabo delectus accusantium quod ad. Nulla asperiores corporis unde molestiae, dignissimos at enim? Unde voluptatibus assumenda architecto culpa? Sint expedita aperiam recusandae, adipisci voluptatem libero nulla unde? Architecto unde reiciendis, saepe quo in et facilis impedit deserunt hic rerum quae dolorem, optio, reprehenderit totam.</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}

export default About;
