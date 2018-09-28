/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

/**
 *
 * @author stephaniedominguezandrade
 */
@Embeddable
public class TareasxusersPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "IDUSER")
    private int iduser;
    @Basic(optional = false)
    @NotNull
    @Column(name = "IDTAREA")
    private int idtarea;

    public TareasxusersPK() {
    }

    public TareasxusersPK(int iduser, int idtarea) {
        this.iduser = iduser;
        this.idtarea = idtarea;
    }

    public int getIduser() {
        return iduser;
    }

    public void setIduser(int iduser) {
        this.iduser = iduser;
    }

    public int getIdtarea() {
        return idtarea;
    }

    public void setIdtarea(int idtarea) {
        this.idtarea = idtarea;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) iduser;
        hash += (int) idtarea;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof TareasxusersPK)) {
            return false;
        }
        TareasxusersPK other = (TareasxusersPK) object;
        if (this.iduser != other.iduser) {
            return false;
        }
        if (this.idtarea != other.idtarea) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.TareasxusersPK[ iduser=" + iduser + ", idtarea=" + idtarea + " ]";
    }
    
}
