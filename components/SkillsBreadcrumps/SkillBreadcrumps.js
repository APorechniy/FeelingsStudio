import React from "react";
import styled from "styled-components";
import { skillsInfo } from "../../content/skills";
import { Typography } from "@mui/material";
import theme from "../../config/theme";

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

  z-index: 1;
`;

const SkillButton = styled.div`
  width: auto;
  height: 2.4rem;

  padding: 0.9rem 1.5rem;
  margin: 1rem;

  border-radius: 2rem;

  box-sizing: border-box;

  background: ${({ isActive }) =>
    isActive ? theme.palette.primary.main : "rgba(255, 255, 255, 1)"};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  cursor: pointer;

  transition: background 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 1);
    color: ${theme.palette.primary.main} !important;
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
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
              variant="h4"
              sx={{
                textDecoration: "none",
                color:
                  activeSkillId === s.id
                    ? "white !important"
                    : theme.palette.primary.main,
              }}
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
