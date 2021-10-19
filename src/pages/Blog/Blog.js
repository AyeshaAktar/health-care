import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="pt-5 blog">
      <div className="">
        <h2>Welcome To Optic Eye-Care</h2>

        <h4>Why eye care!!</h4>
        <p>
          Your eyes are an important part of your health. Most people rely on
          their eyes to see and make sense of the world around them. But some
          eye diseases can lead to vision loss, so it is important to identify
          and treat eye diseases as early as possible. You should get your eyes
          checked as often as your health care provider recommends it, or if you
          have any new vision problems. And just as it is important to keep your
          body healthy, you also need to keep your eyes healthy.
        </p>
        <div className="container text-start bg-white p-5 m-5">
          <h5>Eye Care Tips</h5>
          <p>
            There are things you can do to help keep your eyes healthy and make
            sure you are seeing your best:
          </p>
          <div className="px-5">
            <li>
              <strong>Eat a healthy, balanced diet:</strong> Your diet should
              include plenty or fruits and vegetables, especially deep yellow
              and green leafy vegetables. Eating fish high in omega-3 fatty
              acids, such as salmon, tuna, and halibut can also help your eyes.
            </li>
            <li>
              <strong>Get regular exercise:</strong> Exercise may help to
              prevent or control diabetes, high blood pressure, and high
              cholesterol. These diseases can lead to some eye or vision
              problems. So if you exercise regularly, you can lower your risk of
              getting these eye and vision problems.
            </li>
            <li>
              <strong>Wear sunglasses:</strong> Sun exposure can damage your
              eyes and raise your risk of cataracts and age-related macular
              degeneration. Protect your eyes by using sunglasses that block out
              99 to 100% of both UV-A and UV-B radiation.
            </li>
            <li>
              <strong>Know your other risk factors:</strong> As you get older,
              you are at higher risk of developing age-related eye diseases and
              conditions. It is important to know you risk factors because you
              may be able to lower your risk by changing some behaviors.
            </li>
            <li>
              <strong>Wear contact lenses:</strong> If you wear contacts, take
              steps to prevent eye infections. Wash your hands well before you
              put in or take out your contact lenses. Also follow the
              instructions on how to properly clean them, and replace them when
              needed
            </li>
            <li>
              <strong>Give your eyes a rest:</strong> If you spend a lot of time
              using a computer, you can forget to blink your eyes and your eyes
              can get tired. To reduce eyestrain, try the 20-20-20 rule: Every
              20 minutes, look away about 20 feet in front of you for 20
              seconds.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
