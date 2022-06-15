import React from "react";

import { Container,Col,Row,InputGroup,FormControl} from "react-bootstrap";



const AboutUs = () => {
  return (
    <Container fluid>
      <div className="row text-center mt-5">
        <h1 className="display-5 fw-bold" style={{ color: "red" }}>
          אודותינו
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            דוגיט הינה פלטפורמה אשר מנגישה נותני שירותים בתחום הכלבנות לבעלי
            כלבים
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="rounded-circle"
                  width="160"
                  height="160"
                  src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="profile of CTO"
                />

                <h2 className="fw-normal">Mousa.H</h2>
                <p>מתכנת</p>
                <p>
                  <h5>קצת עלי</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    At, inventore minus sunt esse necessitatibus delectus nobis
                    eligendi natus, recusandae nam quas qui voluptatum voluptas
                    excepturi unde incidunt officiis quam error. Natus ducimus
                    nostrum doloribus reprehenderit ab libero quam nesciunt
                    placeat sequi earum, numquam autem dolorum, omnis ex ipsa at
                    beatae corrupti nihil cupiditate dignissimos vel cum quod?
                    Alias, earum ex. Labore, deleniti natus? Incidunt eligendi
                    libero quasi nemo eos quia, voluptate laudantium quidem in
                    tempora? Voluptatem mollitia amet consequuntur nam! Ullam
                    explicabo voluptas voluptatem architecto dolores odio
                    eligendi odit porro.
                  </p>
                </p>
              </div>
              <div className="col-lg-4">
                <img
                  className="rounded-circle"
                  width="160"
                  height="160"
                  src="https://images.unsplash.com/photo-1535554975110-9133cf938160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="profile of CTO"
                />

                <h2 className="fw-normal">Tom.A</h2>
                <p>מתכנת</p>
                <h5>קצת עלי</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
                  inventore minus sunt esse necessitatibus delectus nobis
                  eligendi natus, recusandae nam quas qui voluptatum voluptas
                  excepturi unde incidunt officiis quam error. Natus ducimus
                  nostrum doloribus reprehenderit ab libero quam nesciunt
                  placeat sequi earum, numquam autem dolorum, omnis ex ipsa at
                  beatae corrupti nihil cupiditate dignissimos vel cum quod?
                  Alias, earum ex. Labore, deleniti natus? Incidunt eligendi
                  libero quasi nemo eos quia, voluptate laudantium quidem in
                  tempora? Voluptatem mollitia amet consequuntur nam! Ullam
                  explicabo voluptas voluptatem architecto dolores odio eligendi
                  odit porro.
                </p>
              </div>
              <div className="col-lg-4">
                <img
                  className="rounded-circle"
                  width="160"
                  height="160"
                  src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="profile of CTO"
                />

                <h2 className="fw-normal">Anton.M</h2>
                <p>מתכנת</p>
                <h5>קצת עלי</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
                  inventore minus sunt esse necessitatibus delectus nobis
                  eligendi natus, recusandae nam quas qui voluptatum voluptas
                  excepturi unde incidunt officiis quam error. Natus ducimus
                  nostrum doloribus reprehenderit ab libero quam nesciunt
                  placeat sequi earum, numquam autem dolorum, omnis ex ipsa at
                  beatae corrupti nihil cupiditate dignissimos vel cum quod?
                  Alias, earum ex. Labore, deleniti natus? Incidunt eligendi
                  libero quasi nemo eos quia, voluptate laudantium quidem in
                  tempora? Voluptatem mollitia amet consequuntur nam! Ullam
                  explicabo voluptas voluptatem architecto dolores odio eligendi
                  odit porro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
