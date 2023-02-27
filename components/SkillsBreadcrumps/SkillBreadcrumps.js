import React from "react";
import styled from "styled-components";
import { skillsInfo } from "../../content/skills";
import { Typography } from "@mui/material";

const Container = styled.div`
  width: min(100%, 80rem);
  height: auto;

  position: absolute;

  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillButton = styled.div`
  width: auto;
  height: 2.4rem;

  padding: 0.9rem 1.5rem;
  margin: 1rem;

  border-radius: 2rem;

  box-sizing: border-box;

  background: ${({ isActive }) =>
    isActive ? "rgba(47, 106, 96, 0.75)" : "rgba(255, 255, 255, 0.5)"};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  cursor: pointer;

  transition: background 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const SkillBreadcrumps = ({ activeSkillId }) => {
  return (
    <Container>
      {skillsInfo.map((s) => (
        <Link
          href={`/skills/${s.id}`}
          key={s.id}
          style={{ textDecoration: "none" }}
        >
          <SkillButton isActive={activeSkillId === s.id}>
            <Typography
              variant="h6"
              sx={{ textDecoration: "none", color: "black" }}
            >
              {s.name}
            </Typography>
          </SkillButton>
        </Link>
      ))}
    </Container>
  );
};

export default SkillBreadcrumps;
