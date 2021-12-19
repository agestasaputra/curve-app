import React from "react";

const Context = React.createContext();

const initialState = {
  dataLandingPage: {
    dataCards: [
      {
        id: 0,
        title: "Consult",
        icon: <i className="fa fa-comments" />,
        desc:
          "Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movvements or a framework social impact low-hanging fruit. Save the world compelling revolutionary progress."
      },
      {
        id: 1,
        title: "Design",
        icon: <i className="fa fa-paint-brush" />,
        desc:
          "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable."
      },
      {
        id: 2,
        title: "Develop",
        icon: <i className="fa fa-cube" />,
        desc:
          "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking."
      },
      {
        id: 3,
        title: "Marketing",
        icon: <i className="fa fa-bullhorn" />,
        desc:
          "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective."
      },
      {
        id: 4,
        title: "Manage",
        icon: <i className="fa fa-tasks" />,
        desc:
          "Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social."
      },
      {
        id: 5,
        title: "Evolve",
        icon: <i className="fa fa-line-chart" />,
        desc:
          "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer."
      }
    ]
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "data-landing":
      return {
        ...state,
        dataLanding: action.data
      };
    default:
      throw new Error();
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
