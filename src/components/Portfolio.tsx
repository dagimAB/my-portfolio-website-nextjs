import Image from "next/image";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="portfolio section light-background p-5 custom-shadow-elevate"
    >
      <div
        className="container section-title text-center mb-5"
        data-aos="fade-up"
      >
        <h2>Portfolio</h2>
        <p className="lead text-muted">
          Selected projects — live links included.
        </p>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div
              className="portfolio-content h-100"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://dagim-abraham-todo-list.netlify.app/",
                  "_blank",
                )
              }
            >
              <Image
                src="/assets/img/portfolio/app-1.jpg"
                className="img-fluid"
                alt="Todo List"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                <h4>Todo List</h4>
                <p>React / Netlify</p>
                <a
                  href="https://dagim-abraham-todo-list.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details-link"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div
              className="portfolio-content h-100"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://dagimabraham-react-api.netlify.app/",
                  "_blank",
                )
              }
            >
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAaVBMVEX///8AAAD8/Pz39/cfHx/R0dHw8PDd3d1aWlqrq6vl5eXt7e18fHzHx8fNzc3Kyspzc3OVlZUNDQ1SUlJlZWUwMDAaGhptbW2EhITBwcGxsbGjo6M1NTU9PT1LS0u3t7cmJiaNjY1EREQPbUXfAAAFCElEQVR4nO2d63KqQBCEWZA7KCsoICrq+z/kQSMnQReNyQ6TFr6q/DNVOy3s9MxeNIyJiYmJiYmJEWNxD+DPYC6KdCUC7mH8CczSExdc7pHwYzqVaBm9HGYghZjkuBJudmKSo8VORIdxpxb/1FVDcA+IlWJ9o8aBe0ScROKWhHtIjNyrIUruMfFxvFdjxDOpP7tXIze5R8WFvVc8HDH3qLgIE4Uau5B7WEyYvkIN4Y/1XXF3CjXSsVb3llSoITbcw+IiWCrUiBzuYTFhqh6O3YJ7WFyYqlel4h4VG7XqVeEeFB8KB5aN154b92p4YzVgDfa9GmN1HGfu8ko26g5pdjuLjloNY9VVQ47Vfl3pNDq29VjrtpavciQjfzSML3Is8zFnlJbzasLysNvLEYlhOsGZUPEyRHkeybqTTqzQtW173vy5Qfhuk4njxnVVZF66T/OjX7qPLacZLEqZt8txBy+q6nnwNpKYc79IO5l0H1VlryJuLbO7nvoqk/VbvEnWprhddr3El8tYUaQFdeGpOkEN60zO0R8Rq7r/plt22e3UGRfeoe/TZ06RzROGJkrvdgm6w/KUVf9fGrtIt48+fGEb4db9TtTz3H9V5JDK5iuPo13vU3TzD6gtQ3v1PLifUHAH9hOsDY0YDR6ej7eOZGo0iRot54YFoRpwzTKHVg0hMiQ9rOPzlPJLCqD5w3/oNvRQwRiQ8psW4jfgrFi6Hr0aEczcod6boJW1zx3k91mQq3ECKuRC8lfFQ1qFUS3GayUFSrGG9bxI/6UaMJPoGbrC7YMd0LzR8LCbpYGaO8CXcInVkFjd0tu1eM1AJRXDMIntOZD9OrOhrWTRlrNV2+z1geTNz1iqBSZ9oG2fs2k92JE7vhdRnVfSxwrtrA9th/QE0/+6QjuTetzhvYhFa8Ikd3wv4qbPY/o5S7QjtTZpnl1jGXTDqInWqK9ygLkOY0Na3c/QEguxHNzhvQqtC5vk6MqB1fkhlwNt7qCVAy6zEMuB5jtoMwucK6WVA65mKWm7P2gVrfJ+Fn2cwBrHAWlFK1ZgkwdxvwNuu3FOKwdaJ11xDZpO0NZZJPF2UrDTGyVp/0egXQYUqK530gnU3mvDpDUeDRVUlU+cWoQ4QK3EVeRb86F2yrn0e/NzpOwywFGFnDvGFyC26ReA7vuNB5AD6X0ZQg6go3C0NX7LFiXfUm/CbpEY1a01kBxi33/lxR/CJDem/8kRBBkkt1wBmEFC6gMtnywBEq5VPY9DExD+9P56SSogTvqExB3TT7gj/R7lQGqA3IUcDJRrURpjwzjTI4ocwRBl/hJnu0c1QBfoCGA6roT0de0MIsteoX88JM7D0RRytKfAhNjOuUN8CWrvgbYxivbaCrDjxQZt03QJtrOhQflbTZpIkObRK3RebIWUZFuUP16lBZDa7YaaaP06QylWulBdSgnQMFZCU8oB9It7iAmmD7D7XTro3/4CeJPtF3Sfyt/CLFYrsfQ2Cme4E8cHWu/cm+H/AqlGN7aGanL0sNC2Sol0oW8/saZe0HuoYRjzh5uR115R+Ru/kslj2d7n98DcXnvqbVzHscwzluWE8/4FTfxZ9BNHGeZJcZrLdJU35szg2l+PiU9dg7peHftKMXOzn3U/PEN25mpMf9+edlnv9kn8MEBXpqfVhyTrbdorHDZlkWRZliSV/Q3/EJQyOVPN38Bs9GE5bxzcxMTExIRh/AMRykxQ5qG+NQAAAABJRU5ErkJggg=="
                className="img-fluid"
                alt="Apple Home Clone"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                <h4>Apple Home Page Clone</h4>
                <p>React / Netlify</p>
                <a
                  href="https://dagimabraham-react-api.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details-link"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div
              className="portfolio-content h-100"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://dagim-abraham-nextjs.netlify.app/",
                  "_blank",
                )
              }
            >
              <Image
                src="data:image/png;base64,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"
                className="img-fluid"
                alt="Amazon Clone"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                <h4>Amazon Clone (Front-end)</h4>
                <p>Next.js / Netlify</p>
                <a
                  href="https://dagim-abraham-nextjs.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details-link"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div
              className="portfolio-content h-100"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://dagimabraham-react-netfliks-clone.netlify.app/",
                  "_blank",
                )
              }
            >
              <Image
                src="data:image/png;base64,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"
                className="img-fluid"
                alt="Netflix Clone"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                <h4>Netflix Clone</h4>
                <p>React / Netlify</p>
                <a
                  href="https://dagimabraham-react-netfliks-clone.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details-link"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div
              className="portfolio-content h-100"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://dagimabraham-ezycart.netlify.app/",
                  "_blank",
                )
              }
            >
              <Image
                src="/assets/img/portfolio/product-3.jpg"
                className="img-fluid"
                alt="EzyCart"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="portfolio-info">
                <h4>EzyCart</h4>
                <p>E-commerce / Netlify</p>
                <a
                  href="https://dagimabraham-ezycart.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details-link"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
