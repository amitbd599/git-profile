import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { FaStaylinked } from "react-icons/fa";
function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const url = `https://api.github.com/users/${name}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [name]);

  const item = useRef();

  const dataRead = (data) => {
    setName(data);
  };
  console.log(name);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header__text">
                  <h2>Get Git Profile Data</h2>
                  <div className="input__box">
                    <input
                      ref={item}
                      type="text"
                      placeholder="Search by user name"
                    />
                    <button
                      onClick={() => dataRead(item.current.value)}
                      className="my__btn"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {name === "" ? (
              <div className="no__data">
                <h4>No Data Found! Please Search by User Name.</h4>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-5 left__side">
                  <div className="wrapper__body__data">
                    <div className="img__section">
                      <img src={data.avatar_url} alt="" />
                    </div>
                    <div className="credit">
                      <span>Developed By </span>
                      <a href="https://www.linkedin.com/in/amitbiswas-tm/">
                        Amit Biswas <FaStaylinked />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 right__side">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>User Name</td>
                        <td>{data.login}</td>
                      </tr>
                      <tr>
                        <td>id</td>
                        <td>{data.id}</td>
                      </tr>
                      <tr>
                        <td>gravatar_id</td>
                        <td>
                          {data.gravatar_id === "" ? "Empty" : data.gravatar_id}
                        </td>
                      </tr>
                      <tr>
                        <td>public_repos</td>
                        <td>{data.public_repos}</td>
                      </tr>
                      <tr>
                        <td>public_gists</td>
                        <td>{data.public_gists}</td>
                      </tr>
                      <tr>
                        <td>followers</td>
                        <td>{data.followers}</td>
                      </tr>
                      <tr>
                        <td>following</td>
                        <td>{data.following}</td>
                      </tr>
                      <tr>
                        <td>created_at</td>
                        <td>{data.created_at}</td>
                      </tr>
                      <tr>
                        <td>updated_at</td>
                        <td>{data.updated_at}</td>
                      </tr>

                      <tr>
                        <td>type</td>
                        <td>{data.type}</td>
                      </tr>
                      <tr>
                        <td>site_admin</td>
                        <td> {data.site_admin === false ? "No" : "Yes"}</td>
                      </tr>
                      <tr>
                        <td>name</td>
                        <td> {data.name === null ? "Not Set" : data.name}</td>
                      </tr>
                      <tr>
                        <td>company</td>
                        <td>
                          {" "}
                          {data.company === null ? "Not Set" : data.company}
                        </td>
                      </tr>
                      <tr>
                        <td>blog</td>
                        <td>
                          {" "}
                          {data.blog === "" ? "No Blog Found" : data.blog}
                        </td>
                      </tr>
                      <tr>
                        <td>location</td>
                        <td>
                          {" "}
                          {data.location === null ? "Not Set" : data.location}
                        </td>
                      </tr>
                      <tr>
                        <td>email</td>
                        <td> {data.email === null ? "Hidden" : data.email}</td>
                      </tr>
                      <tr>
                        <td>hireable</td>
                        <td>
                          {" "}
                          {data.hireable === null ? "Hidden" : data.hireable}
                        </td>
                      </tr>
                      <tr>
                        <td>bio</td>
                        <td> {data.bio === null ? "Not Set" : data.bio}</td>
                      </tr>
                      <tr>
                        <td>twitter_username</td>
                        <td>
                          {" "}
                          {data.twitter_username === null
                            ? "Not Set"
                            : data.twitter_username}
                        </td>
                      </tr>

                      <tr>
                        <td>url</td>
                        <td>{data.url}</td>
                      </tr>
                      <tr>
                        <td>html_url</td>
                        <td>{data.html_url}</td>
                      </tr>
                      <tr>
                        <td>followers_url</td>
                        <td>{data.followers_url}</td>
                      </tr>
                      <tr>
                        <td>following_url</td>
                        <td>{data.following_url}</td>
                      </tr>
                      <tr>
                        <td>gists_url</td>
                        <td>{data.gists_url}</td>
                      </tr>
                      <tr>
                        <td>starred_url</td>
                        <td>{data.starred_url}</td>
                      </tr>
                      <tr>
                        <td>subscriptions_url</td>
                        <td>{data.subscriptions_url}</td>
                      </tr>
                      <tr>
                        <td>organizations_url</td>
                        <td>{data.organizations_url}</td>
                      </tr>
                      <tr>
                        <td>repos_url</td>
                        <td>{data.repos_url}</td>
                      </tr>
                      <tr>
                        <td>events_url</td>
                        <td>{data.events_url}</td>
                      </tr>
                      <tr>
                        <td>received_events_url</td>
                        <td>{data.received_events_url}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
