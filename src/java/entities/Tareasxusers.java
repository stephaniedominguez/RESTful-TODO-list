/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author stephaniedominguezandrade
 */
@Entity
@Table(name = "TAREASXUSERS")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Tareasxusers.findAll", query = "SELECT t FROM Tareasxusers t")
    , @NamedQuery(name = "Tareasxusers.findByIduser", query = "SELECT t FROM Tareasxusers t WHERE t.tareasxusersPK.iduser = :iduser")
    , @NamedQuery(name = "Tareasxusers.findByIdtarea", query = "SELECT t FROM Tareasxusers t WHERE t.tareasxusersPK.idtarea = :idtarea")})
public class Tareasxusers implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected TareasxusersPK tareasxusersPK;

    public Tareasxusers() {
    }

    public Tareasxusers(TareasxusersPK tareasxusersPK) {
        this.tareasxusersPK = tareasxusersPK;
    }

    public Tareasxusers(int iduser, int idtarea) {
        this.tareasxusersPK = new TareasxusersPK(iduser, idtarea);
    }

    public TareasxusersPK getTareasxusersPK() {
        return tareasxusersPK;
    }

    public void setTareasxusersPK(TareasxusersPK tareasxusersPK) {
        this.tareasxusersPK = tareasxusersPK;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (tareasxusersPK != null ? tareasxusersPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Tareasxusers)) {
            return false;
        }
        Tareasxusers other = (Tareasxusers) object;
        if ((this.tareasxusersPK == null && other.tareasxusersPK != null) || (this.tareasxusersPK != null && !this.tareasxusersPK.equals(other.tareasxusersPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.Tareasxusers[ tareasxusersPK=" + tareasxusersPK + " ]";
    }
    
}
